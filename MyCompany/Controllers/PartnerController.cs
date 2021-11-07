using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class PartnerController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                var user = Service.GetActiveUser(Session);
                var result = ctx.Database.SqlQuery<SP_Partner_Result>("SP_Partner " + user.UserID).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: Partner
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Save(tblPartner model)
        {
            var dmr = new DMR();
            try
            {
                if (string.IsNullOrEmpty(model.IDNumber))
                    throw new Exception("ID Number is required.");
                var checkNumber = model.IDNumber.All(char.IsDigit);
                if (checkNumber == false)
                    throw new Exception("Number ID must be in numeric.");
                if (string.IsNullOrEmpty(model.Name))
                    throw new Exception("Partner name is required.");
                if (string.IsNullOrEmpty(model.PhoneNumber))
                    throw new Exception("Phone number is required.");
                if (model.PhoneNumber.All(char.IsDigit) == false)
                    throw new Exception("Phone number must be in number.");

                using (var ctx = new MyEntities())
                {
                    var user = Service.GetActiveUser(Session);

                    //var data = ctx.Database.SqlQuery<tblPartner>("select * from tblPartner where IDPartner = " + model.IDPartner).FirstOrDefault();
                    var data = ctx.tblPartner.Where(m => m.IDPartner == model.IDPartner).FirstOrDefault();
                    if (data != null)
                    {
                        data.IDNumber = model.IDNumber;
                        data.Name = model.Name;
                        data.PhoneNumber = model.PhoneNumber;
                        data.IsActive = model.IsActive;
                        data.Address1 = model.Address1;
                        data.Modified = DateTime.Now;
                        data.ModifiedBy = user.UserID;

                        ctx.SaveChanges();
                        dmr.messages.Add("Updated.");
                    }
                    else
                    {
                        //check for exist name
                        var exist = ctx.tblPartner.Where(m => m.Name.ToLower() == model.Name.ToLower() && m.IDPartner != model.IDPartner).FirstOrDefault();
                        if (exist != null)
                            throw new Exception("Partner name already exist. Please put a new one.");

                        model.Created = DateTime.Now;
                        model.CreatedBy = user.UserID;

                        ctx.tblPartner.Add(model);
                        ctx.SaveChanges();
                        dmr.messages.Add("Added.");
                    }
                }
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
                    var count = ctx.inPurchase.Where(m => m.IDPartner == id).Count();

                    if (count > 0)
                        throw new Exception("Cannot remove. Data is used in database.");

                    var del = ctx.Database.ExecuteSqlCommand("Delete from tblPartner where IDPartner = " + id);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ToggleActive(tblPartner model)
        {
            var dmr = new DMR();
            try
            {
                using (var ctx = new MyEntities())
                {
                    var isActive = 1;
                    if (model.IsActive == false)
                        isActive = 0;
                    
                    var update = ctx.Database.ExecuteSqlCommand("Update tblPartner set IsActive = " + isActive +
                        " where IDPartner = " + model.IDPartner);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }

            return Json(dmr);
        }
    }
}