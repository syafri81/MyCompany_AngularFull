using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class ProductController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                var user = Service.GetActiveUser(Session);
                var model = ctx.Database.SqlQuery<SP_Product_Result>("SP_Product " + user.CampaignID).ToList();
                var result = (from m in model
                                  //select new SP_Product_Result
                                  //{
                                  //    IDProduct = m.IDProduct,
                                  //    ProductName = m.ProductName,
                                  //    BuyPrice = m.BuyPrice,
                                  //    SellPrice = m.SellPrice,
                                  //    Weight = m.Weight,
                                  //    Size = m.Size,
                                  //    IsActive = m.IsActive,
                                  //    IDSupplier = m.IDSupplier,
                                  //    SupplierName = m.SupplierName,
                                  //    SearchName = m.SearchName,
                                  //    CurrencyBuy = Service.MoneyFormat(m.BuyPrice),
                                  //    CurrencySell = Service.MoneyFormat(m.SellPrice)
                                  //}).ToList();

                              select new SP_Product_Result
                              {
                                  IDProduct = m.IDProduct,
                                  ProductName = m.ProductName,
                                  Weight = m.Weight,
                                  Size = m.Size,
                                  IsActive = m.IsActive,
                                  Description = m.Description,
                                  SearchName = m.SearchName
                              }).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Save(tblProduct product)//(ExpendTemplate expend)
        {
            var dmr = new DMR();
            try
            {
                var user = Service.GetActiveUser(Session);

                if (string.IsNullOrEmpty(product.ProductName))
                    throw new Exception("Product name is required.");
                //if (product.BuyPrice == 0)
                //    throw new Exception("Buy price is required.");
                //if (product.SellPrice == 0)
                //    throw new Exception("Sell price is required.");
                //if (product.IDSupplier == 0)
                //    throw new Exception("Supplier name is required.");

                //get exist product with same supplier, if exist block it
                using (var ctx = new MyEntities())
                {
                    if (product.IDProduct == 0)
                    {
                        var exist = ctx.View_Product.Where(m => m.ProductName.ToLower() == product.ProductName.ToLower()).FirstOrDefault();
                        if (exist != null)
                            throw new Exception("Truson already exist. Please add a new one.");
                    }                    
                }
                

                using (var ctx = new MyEntities())
                {
                    var pDetail = ctx.tblProduct.Where(m => m.IDProduct == product.IDProduct).FirstOrDefault();
                    if (pDetail == null)
                    {
                        pDetail = new tblProduct();
                        pDetail.ProductName = product.ProductName;
                        pDetail.Weight = product.Weight;
                        pDetail.Size = product.Size;
                        pDetail.IsActive = product.IsActive;
                        pDetail.Description = product.Description;
                        pDetail.IDCampaign = user.CampaignID;
                        
                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.tblProduct.Add(pDetail);
                        ctx.SaveChanges();
                    }
                    else
                    {
                        pDetail.ProductName = product.ProductName;
                        pDetail.Weight = product.Weight;
                        pDetail.Size = product.Size;
                        pDetail.IsActive = product.IsActive;
                        pDetail.Description = product.Description;
                        pDetail.IDCampaign = user.CampaignID;

                        pDetail.Created = DateTime.Now;
                        pDetail.CreatedBy = user.UserID;
                        ctx.SaveChanges();
                    }                    
                }

                dmr.messages.Add(product.IDProduct.ToString());
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr);
        }

        public JsonResult Delete(int id)
        {
            var dmr = new DMR();
            try
            {


                using (var ctx = new MyEntities())
                {
                    var count = ctx.Database.SqlQuery<int>("Select count(IDDetail) From inExpendDetail where IDProduct = " + id).FirstOrDefault(); //ctx.inExpendDetail.Where(m => m.IDProduct == id).Count();
                    count += ctx.Database.SqlQuery<int>("Select count(IDDetail) From inPurchaseDetail where IDProduct = " + id).FirstOrDefault();

                    if (count > 0)
                        throw new Exception("Cannot remove. Data is used in database.");

                    var del = ctx.Database.ExecuteSqlCommand("Delete from tblProduct where IDProduct = " + id);
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