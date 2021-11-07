using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class GeneralDataController : Controller
    {        
        public JsonResult MoneyCurrency(decimal obj)
        {
            var result = Service.MoneyCurrency(obj);
            if (obj == 0)
                result = "Rp. 0,-";
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult MoneyFormat(decimal obj)
        {
            var result = Service.MoneyFormat(obj);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ComboSupplier()
        {
            var result = Service.ComboSupplier();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        // GET: GeneralData
        public JsonResult AutoCompleteProduct(string term)
        {
            {
                int campaignID = Convert.ToInt32(Session[Global.CampaignID]);
                var result = new List<tblProduct>();
                using (var ctx = new MyEntities())
                {
                    result = ctx.tblProduct.Where(m => m.ProductName.ToLower().Contains(term.ToLower()) && m.IDCampaign == campaignID).ToList();
                }                                

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: GeneralData
        public JsonResult AutoCompletePartner(string term)
        {
            using (var ctx = new MyEntities())
            {
                var result = ctx.View_Partner.Where(m => m.SearchName.ToLower().Contains(term.ToLower())).ToList();
                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetProductPrice(int id)
        {
            using (var ctx = new MyEntities())
            {
                var result = ctx.inExpendDetail.Where(m => m.IDProduct == id).OrderByDescending(m => m.Created).Select(m => m.SellPrice).FirstOrDefault();
                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }
    }
}