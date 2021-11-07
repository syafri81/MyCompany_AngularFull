using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class UserManagementController : Controller
    {
        public JsonResult GetIndex()
        {
            using (var ctx = new MyEntities())
            {
                //var result = ctx.tblUser.ToList();
                var result = ctx.Database.SqlQuery<tblUser>("Select * from tblUser").ToList();

                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }

        // GET: UserManagement
        public ActionResult Index()
        {
            return View();
        }
    }
}