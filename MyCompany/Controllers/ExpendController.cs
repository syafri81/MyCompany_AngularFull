using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class ExpendController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                var user = Service.GetActiveUser(Session);
                try
                {
                    var model = ctx.Database.SqlQuery<SP_Expend_Result>("SP_Expend " + user.CampaignID + "," + user.CustCompanyID).ToList();

                    var result = (from m in model
                                  select new SP_Expend_Result
                                  {
                                      IDExpend = m.IDExpend,
                                      IDFaktur = m.IDFaktur,
                                      IDSupplier = m.IDSupplier,
                                      SupplierName = m.SupplierName,
                                      SearchName = m.SearchName,
                                      PhoneNumber = m.PhoneNumber,
                                      Created = m.Created,
                                      StrCreated = m.StrCreated,
                                      Amount = m.Amount,
                                      Currency = Service.MoneyFormat(m.Amount)
                                  }).ToList();

                    return Json(result, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {

                }

            }

            return Json("a");
        }

        //Get contacts list of supplier based on supplier id
        public JsonResult GetDetails(int id)
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.inExpend.ToList();
                var model = ctx.Database.SqlQuery<View_ExpendDetail>("Select * from View_ExpendDetail where IDExpend = " + id).ToList();
                var result = (from m in model
                              select new View_ExpendDetail
                              {
                                  IDDetail = m.IDDetail,
                                  ProductName = m.ProductName,
                                  Weight = m.Weight,
                                  Size = m.Size,
                                  Volume = m.Volume,
                                  BuyPrice = m.BuyPrice,
                                  BuyAmount = m.BuyAmount,
                                  SellPrice = m.SellPrice,
                                  SellAmount = m.SellAmount,
                                  IDExpend = m.IDExpend,
                                  IDProduct = m.IDProduct,
                                  IDFaktur = m.IDFaktur,
                                  IDSupplier = m.IDSupplier,
                                  Created = m.Created,
                                  StrCreated = m.StrCreated,
                                  CurrencySell = Service.MoneyFormat(m.SellPrice),
                                  CurrencySellAmount = Service.MoneyFormat(m.SellAmount),
                                  CurrencyBuy = Service.MoneyFormat(m.BuyPrice),
                                  CurrencyBuyAmount = Service.MoneyFormat(m.BuyAmount)
                              }).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult CreateNewFaktur()
        {
            var user = Service.GetActiveUser(Session);
            var result = Service.CreateFakturExpend(user.CampaignID, user.CustCompanyID);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ComboSupplier()
        {
            var result = Service.ComboSupplier();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        
        // GET: Supplier
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Save(View_ExpendDetail details)//(ExpendTemplate expend)
        {
            var dmr = new DMR();
            try
            {
                if (string.IsNullOrEmpty(details.ProductName))
                    throw new Exception("Product name is required.");
                if (details.Volume == 0)
                    throw new Exception("Volume is required.");
                if (details.BuyPrice == 0)
                    throw new Exception("Buy price is required.");
                if (details.SellPrice == 0)
                    throw new Exception("Sell price is required.");

                if (details.SellPrice < details.BuyPrice)
                    throw new Exception("Sell price must be higher than buy price.");

                var fakturID = details.IDFaktur;
                var supplierID = details.IDSupplier;

                var user = Service.GetActiveUser(Session);
                               
                using (var ctx = new MyEntities())
                {
                    //var data = ctx.Database.SqlQuery<inExpend>("select * from inExpend where IDSupplier = " + model.IDSupplier).FirstOrDefault();
                    var data = ctx.inExpend.Where(m => m.IDFaktur == fakturID).FirstOrDefault();
                    if (data == null)
                    {
                        data = new inExpend();
                        data.IDFaktur = fakturID;
                        data.FakturCreated = DateTime.Now;
                        data.IDSupplier = supplierID;
                        data.IDCampaign = user.CampaignID;
                        data.IDCustCompany = user.CustCompanyID;
                        data.Amount = details.SellAmount;
                        data.Created = DateTime.Now;
                        data.CreatedBy = user.UserID;

                        ctx.inExpend.Add(data);
                        ctx.SaveChanges();

                        details.IDExpend = data.IDExpend;
                    }

                    var pDetail = ctx.inExpendDetail.Where(m => m.IDExpend == details.IDExpend && m.IDDetail == details.IDDetail).FirstOrDefault();
                    if (pDetail == null)
                    {
                        pDetail = new inExpendDetail();
                        pDetail.IDProduct = details.IDProduct;

                        pDetail.BuyPrice = details.BuyPrice;
                        pDetail.BuyAmount = details.BuyAmount;

                        pDetail.SellPrice = details.SellPrice;
                        pDetail.SellAmount = details.SellAmount;
                        pDetail.Volume = details.Volume;

                        pDetail.IDExpend = data.IDExpend;
                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.inExpendDetail.Add(pDetail);
                        ctx.SaveChanges();
                    }
                    else
                    {
                        pDetail.BuyAmount = details.SellAmount;
                        pDetail.IDProduct = details.IDProduct;
                        pDetail.BuyPrice = details.BuyPrice;
                        pDetail.BuyAmount = details.BuyAmount;
                        pDetail.SellPrice = details.SellPrice;
                        pDetail.SellAmount = details.SellAmount;
                        pDetail.Volume = details.Volume;

                        pDetail.IDExpend = data.IDExpend;
                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.SaveChanges();
                    }

                    var amount = ctx.inExpendDetail.Where(m => m.IDExpend == details.IDExpend).Select(m => m.BuyAmount).Sum();
                    int update = ctx.Database.ExecuteSqlCommand("Update inExpend set Amount = " + amount +
                        " where IDExpend = " + details.IDExpend);
                }

                dmr.messages.Add(details.IDExpend.ToString());
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr);
        }

        public JsonResult Delete(long id)
        {
            var dmr = new DMR();
            try
            {


                using (var ctx = new MyEntities())
                {
                    var del = ctx.Database.ExecuteSqlCommand("Delete from inExpendDetail where IDExpend = " + id);
                    del += ctx.Database.ExecuteSqlCommand("Delete from inExpend where IDExpend = " + id);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteDetail(long id, long idExpend)
        {
            var dmr = new DMR();
            try
            {
                using (var ctx = new MyEntities())
                {
                    var del = ctx.Database.ExecuteSqlCommand("Delete from inExpendDetail where IDDetail = " + id);
                    var amount = ctx.inExpendDetail.Where(m => m.IDExpend == idExpend).Select(m => m.BuyAmount).Sum();
                    var update = ctx.Database.ExecuteSqlCommand("Update inExpend set Amount = " + amount +" where IDExpend = " + idExpend);
                    dmr.messages.Add(amount.ToString());
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr, JsonRequestBehavior.AllowGet);
        }
    }
}