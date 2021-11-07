using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class Service
{
    public static UserTemplate GetActiveUser(HttpSessionStateBase session)
    {
        var user = new UserTemplate();
        try
        {
            user.UserID = Convert.ToInt32(session[Global.UserID].ToString());
            user.UserName = session[Global.UserName].ToString();
            user.DisplayName = session[Global.DisplayName].ToString();
            user.UserLevel = Convert.ToInt32(session[Global.UserLevel].ToString());
            try
            {
                user.CampaignID = Convert.ToInt32(session[Global.CampaignID].ToString());
            }
            catch
            {
                user.CampaignID = 0;
            }
            user.CustCompanyID = Convert.ToInt32(session[Global.CustCompanyID].ToString());
        }
        catch
        {
            user.UserID = 0;
        }
        

        return user;
    }

    public static string MoneyCurrency(decimal item)
    {
        return "Rp. " + item.ToString("###,###.##") + ",-";
    }

    public static string MoneyFormat(decimal item)
    {
        return item.ToString("###,###.##");
    }

    public static string CreateFakturExpend(int campaignID, int custCompanyID)
    {
        try
        {
            using (var ctx = new MyEntities())
            {
                var result = ctx.Database.SqlQuery<string>("select dbo.CreateFakturExpend(" + campaignID + "," + custCompanyID + ")").SingleOrDefault();
                return result;
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public static string CreateFakturPurchase(int campaignID, int custCompanyID)
    {
        try
        {
            using (var ctx = new MyEntities())
            {
                var result = ctx.Database.SqlQuery<string>("select dbo.CreateFakturPurchase(" + campaignID + "," + custCompanyID + ")").SingleOrDefault();
                return result;
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public static List<ComboTemplate> ComboSupplier()
    {
        using (var ctx = new MyEntities())
        {
            var result = (from m in ctx.tblSupplier where m.IsActive == true
                          select new ComboTemplate { ComboID = m.IDSupplier, ComboName = m.SupplierName }).ToList();

            var noCombo = new ComboTemplate();
            noCombo.ComboID = 0;
            noCombo.ComboName = "-";
            result.Insert(0, noCombo);
            
            return result;
        }
    }    
    
}