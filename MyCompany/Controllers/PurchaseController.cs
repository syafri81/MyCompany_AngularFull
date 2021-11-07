using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class PurchaseController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                var user = Service.GetActiveUser(Session);
                var model = ctx.Database.SqlQuery<SP_Purchase_Result>("SP_Purchase " + user.CampaignID + "," + user.CustCompanyID).ToList();

                var result = (from m in model
                              select new SP_Purchase_Result
                              {
                                  IDPurchase = m.IDPurchase,
                                  IDFaktur = m.IDFaktur,
                                  IDPartner = m.IDPartner,
                                  IDNumber = m.IDNumber,
                                  Name = m.Name,
                                  SearchName = m.SearchName,
                                  PhoneNumber = m.PhoneNumber,
                                  Created = m.Created,
                                  StrCreated = m.StrCreated,
                                  Amount = m.Amount,
                                  Currency = Service.MoneyFormat(m.Amount)
                              }).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        //Get contacts list of supplier based on supplier id
        public JsonResult GetDetails(int id)
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.inPurchase.ToList();
                var model = ctx.Database.SqlQuery<View_PurchaseDetail>("Select * from View_PurchaseDetail where IDPurchase = " + id).ToList();
                var result = (from m in model
                              select new View_PurchaseDetail
                              {
                                  IDDetail = m.IDDetail,
                                  ProductName = m.ProductName,
                                  Weight = m.Weight,
                                  Size = m.Size,
                                  Volume = m.Volume,
                                  Price = m.Price,
                                  Amount = m.Amount,
                                  IDPurchase = m.IDPurchase,
                                  IDProduct = m.IDProduct,
                                  IDFaktur = m.IDFaktur,
                                  IDPartner = m.IDPartner,
                                  CurrencyPrice = Service.MoneyFormat(m.Price),
                                  CurrencyAmount = Service.MoneyFormat(m.Amount)
                              }).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult CreateNewFaktur()
        {
            var user = Service.GetActiveUser(Session);
            var result = Service.CreateFakturPurchase(user.CampaignID, user.CustCompanyID);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        
        // GET: Supplier
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Save(View_PurchaseDetail detail)//(PurchaseTemplate Purchase)
        {
            var dmr = new DMR();
            try
            {
                if (detail.Volume == 0)
                    throw new Exception("Volume is required.");

                var fakturID = detail.IDFaktur;
                var partnerID = detail.IDPartner;

                var user = Service.GetActiveUser(Session);

                using (var ctx = new MyEntities())
                {
                    var data = ctx.inPurchase.Where(m => m.IDFaktur == fakturID && m.IDCampaign == user.CampaignID && m.IDCustCompany == m.IDCustCompany).FirstOrDefault();
                    if (data == null)
                    {
                        data = new inPurchase();
                        data.IDFaktur = fakturID;
                        data.FakturCreated = DateTime.Now;
                        data.IDPartner = partnerID;
                        data.IDCampaign = user.CampaignID;
                        data.IDCustCompany = user.CustCompanyID;
                        data.Amount = detail.Amount;
                        data.Created = DateTime.Now;
                        data.CreatedBy = user.UserID;

                        ctx.inPurchase.Add(data);
                        ctx.SaveChanges();

                        detail.IDPurchase = data.IDPurchase;
                    }

                    var pDetail = ctx.inPurchaseDetail.Where(m => m.IDPurchase == detail.IDPurchase && m.IDDetail == detail.IDDetail).FirstOrDefault();
                    if (pDetail == null)
                    {
                        pDetail = new inPurchaseDetail();
                        pDetail.Amount = detail.Amount;
                        pDetail.IDProduct = detail.IDProduct;
                        pDetail.Price = detail.Price;
                        pDetail.Volume = detail.Volume;

                        pDetail.IDPurchase = detail.IDPurchase;
                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.inPurchaseDetail.Add(pDetail);
                        ctx.SaveChanges();
                    }
                    else
                    {
                        pDetail.Amount = detail.Amount;
                        pDetail.IDProduct = detail.IDProduct;
                        pDetail.Price = detail.Price;
                        pDetail.Volume = detail.Volume;

                        pDetail.IDPurchase = detail.IDPurchase;
                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.SaveChanges();
                    }

                    var amount = ctx.inPurchaseDetail.Where(m => m.IDPurchase == detail.IDPurchase).Select(m => m.Amount).Sum();
                    int update = ctx.Database.ExecuteSqlCommand("Update inPurchase set Amount = " + amount +
                        " where IDPurchase = " + detail.IDPurchase);
                }

                dmr.messages.Add(detail.IDPurchase.ToString());
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
                    var del = ctx.Database.ExecuteSqlCommand("Delete from inPurchaseDetail where IDPurchase = " + id);
                    del += ctx.Database.ExecuteSqlCommand("Delete from inPurchase where IDPurchase = " + id);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteDetail(long id, long idPurchase)
        {
            var dmr = new DMR();
            try
            {
                using (var ctx = new MyEntities())
                {
                    var del = ctx.Database.ExecuteSqlCommand("Delete from inPurchaseDetail where IDDetail = " + id);
                    decimal amount = 0;
                    try
                    {
                        amount = ctx.inPurchaseDetail.Where(m => m.IDPurchase == idPurchase).Select(m => m.Amount).Sum();
                    }
                    catch
                    {
                        amount = 0;
                    }
                    var update = ctx.Database.ExecuteSqlCommand("Update inPurchase set Amount = " + amount + " where IDPurchase = " + idPurchase);
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