//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyCompany.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblUser
    {
        public int IDUser { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int UserLevel { get; set; }
        public string CampaignID { get; set; }
        public Nullable<int> CustCompanyID { get; set; }
        public bool IsActive { get; set; }
        public System.DateTime Created { get; set; }
        public int CreatedBy { get; set; }
    }
}