using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class SupplierController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.tblSupplier.ToList();
                var result = ctx.Database.SqlQuery<tblSupplier>("Select * from tblSupplier").ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        //Get contacts list of supplier based on supplier id
        public JsonResult GetSupplierContact(int id)
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.tblSupplier.ToList();
                var result = ctx.Database.SqlQuery<tblSupplier>("Select * from tblSupplierContact where IDSupplier = " + id).ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: Supplier
        public ActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public JsonResult Save(tblSupplier model)
        {
            var dmr = new DMR();
            try
            {
                if (string.IsNullOrEmpty(model.SupplierName))
                    throw new Exception("Supplier name is required.");
                if (string.IsNullOrEmpty(model.PhoneNumber))
                    throw new Exception("Phone number is required.");
                if (model.PhoneNumber.All(char.IsDigit) == false)
                    throw new Exception("Phone number must be in number.");

                using (var ctx = new MyEntities())
                {
                    var user = Service.GetActiveUser(Session);

                    //var data = ctx.Database.SqlQuery<tblSupplier>("select * from tblSupplier where IDSupplier = " + model.IDSupplier).FirstOrDefault();
                    var data = ctx.tblSupplier.Where(m => m.IDSupplier == model.IDSupplier).FirstOrDefault();
                    if (data != null)
                    {                       

                        data.IDCampaign = model.IDCampaign;
                        data.SupplierName = model.SupplierName.ToUpper();
                        data.PhoneNumber = model.PhoneNumber;
                        data.IsActive = model.IsActive;
                        data.Address = model.Address;
                        data.Modified = DateTime.Now;
                        data.ModifiedBy = user.UserID;

                        ctx.SaveChanges();
                        dmr.messages.Add("Updated.");
                    }
                    else
                    {
                        //check for exist name
                        var exist = ctx.tblSupplier.Where(m => m.SupplierName.ToLower() == model.SupplierName.ToLower() && m.IDSupplier != model.IDSupplier).FirstOrDefault();
                        if (exist != null)
                            throw new Exception("Supplier name already exist. Please put a new one.");

                        model.SupplierName = model.SupplierName.ToUpper();
                        model.Created = DateTime.Now;
                        model.CreatedBy = user.UserID;

                        ctx.tblSupplier.Add(model);
                        ctx.SaveChanges();
                        dmr.messages.Add("Added.");
                    }
                }
            }
            catch(Exception ex)
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
                    var count = ctx.inExpend.Where(m => m.IDSupplier == id).Count();
                    
                    if (count > 0)
                        throw new Exception("Cannot remove. Data is used in database.");

                    var del = ctx.Database.ExecuteSqlCommand("Delete from tblSupplier where IDSupplier = " + id);
                    del += ctx.Database.ExecuteSqlCommand("Delete from tblSupplierContact where IDSupplier = " + id);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }
            return Json(dmr, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetDetails(int id)
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.tblSupplier.ToList();
                var result = ctx.Database.SqlQuery<tblSupplierContact>("Select * from tblSupplierContact where IDSupplier = " + id).ToList();

                if (result.Count() == 0)
                    result = new List<tblSupplierContact>();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult SaveDetail(tblSupplierContact model)
        {
            var dmr = new DMR();
            try
            {
                if (string.IsNullOrEmpty(model.ContactName))
                    throw new Exception("Contact name is required.");
                if (string.IsNullOrEmpty(model.PhoneNumber) && string.IsNullOrEmpty(model.Email))
                    throw new Exception("Either phone number or email is required.");
                if (model.PhoneNumber.All(char.IsDigit) == false)
                    throw new Exception("Phone number must be in number.");

                using (var ctx = new MyEntities())
                {
                    var user = Service.GetActiveUser(Session);

                    //var data = ctx.Database.SqlQuery<tblSupplier>("select * from tblSupplier where IDSupplier = " + model.IDSupplier).FirstOrDefault();
                    var data = ctx.tblSupplierContact.Where(m => m.IDContact == model.IDContact).FirstOrDefault();
                    if (data != null)
                    {

                        data.IDSupplier = model.IDSupplier;
                        data.ContactName = model.ContactName;
                        data.PhoneNumber = model.PhoneNumber;
                        data.Email = model.Email;
                        data.IsActive = model.IsActive;

                        ctx.SaveChanges();
                        dmr.messages.Add("Updated.");
                    }
                    else
                    {
                        //check for exist name
                        var exist = ctx.tblSupplierContact.Where(m => m.ContactName.ToLower() == model.ContactName.ToLower() && m.IDContact != model.IDContact).FirstOrDefault();
                        if (exist != null)
                            throw new Exception("Supplier name already exist. Please put a new one.");

                        exist = ctx.tblSupplierContact.Where(m => m.PhoneNumber.ToLower() == model.PhoneNumber.ToLower() && m.IDContact != model.IDContact).FirstOrDefault();
                        if (exist != null)
                            throw new Exception("Phone number already exist. Please put a new one.");

                        model.Created = DateTime.Now;
                        model.CreatedBy = user.UserID;

                        ctx.tblSupplierContact.Add(model);
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

        [HttpPost]
        public JsonResult ToggleActive(tblSupplier model)
        {
            var dmr = new DMR();
            try
            {
                using (var ctx = new MyEntities())
                {
                    var isActive = 1;
                    if (model.IsActive == false)
                        isActive = 0;

                    var update = ctx.Database.ExecuteSqlCommand("Update tblSupplierContact set IsActive = " + isActive +
                        " where IDSupplier = " + model.IDSupplier);
                    update += ctx.Database.ExecuteSqlCommand("Update tblSupplier set IsActive = " + isActive +
                        " where IDSupplier = " + model.IDSupplier);
                }
            }
            catch (Exception ex)
            {
                dmr.isSuccess = false;
                dmr.messages.Add(ex.Message);
            }

            return Json(dmr);
        }

        [HttpPost]
        public JsonResult ToggleActiveDetail(tblSupplierContact model)
        {
            var dmr = new DMR();
            try
            {
                using (var ctx = new MyEntities())
                {
                    var isActive = 1;
                    if (model.IsActive == false)
                        isActive = 0;

                    var update = ctx.Database.ExecuteSqlCommand("Update tblSupplierContact set IsActive = " + isActive +
                        " where IDSupplier = " + model.IDSupplier + " And IDContact = " + model.IDContact);
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