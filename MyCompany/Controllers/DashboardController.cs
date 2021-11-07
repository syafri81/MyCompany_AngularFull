using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyCompany.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            Session[Global.CampaignID] = 0;
            return View();
        }
        
        public JsonResult GoToCampaign(int id, string campaignName)
        {
            Session[Global.CampaignID] = id;
            Session[Global.CampaignName] = campaignName;
            return Json(id, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetDashboardMenu()
        {
            var result = new List<View_UserAssignMenu>();
            int campaignID = Convert.ToInt32(Session[Global.CampaignID]);
            using (var ctx = new MyEntities())
            {
                var user = Service.GetActiveUser(Session);
                try
                {
                    result = ctx.View_UserAssignMenu.Where(m => m.IDUser == user.UserID && m.IDCampaign == campaignID).ToList();                    
                }
                catch (Exception ex)
                {

                }
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DisplayCampaign()
        {
            bool result = false;
            try
            {
                var campaignID = Convert.ToInt32(Session[Global.CampaignID]);
                if (campaignID > 0)
                    throw new Exception();
                result = true;
            }
            catch
            {
                result = false;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DisplayHome()
        {
            bool result = false;
            try
            {
                var campaignID = Convert.ToInt32(Session[Global.CampaignID]);
                if (campaignID == 0)
                    throw new Exception();
                result = true;
            }
            catch
            {
                result = false;
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCampaigns()
        {
            var user = Service.GetActiveUser(Session);
            var result = new List<AssignCampaignTemplate>();
            using (var ctx = new MyEntities())
            {
                result = (from m in ctx.View_UserAssignCampaign
                          where m.IDUser == user.UserID
                          select new AssignCampaignTemplate { CampaignID = m.IDCampaign, CampaignName = m.CampaignName, IconPath = m.IconPath }).ToList();
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetChosenCampaign()
        {
            string campaignName = string.Empty;
            try
            {
                campaignName = Session[Global.CampaignName].ToString();
            }
            catch
            {
                campaignName = string.Empty;
            }
            return Json(campaignName, JsonRequestBehavior.AllowGet);
        }
    }
}