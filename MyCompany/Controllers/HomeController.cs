using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //Session.RemoveAll();
            if (Session[Global.UserID] == null)
                return RedirectToAction("Login", "Account");

            return View();
        }

        public JsonResult Logoff()
        {
            Session.RemoveAll();
            return Json("Logoff");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}