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
    
    public partial class SP_Expend_Result
    {
        public long IDExpend { get; set; }
        public string IDFaktur { get; set; }
        public int IDSupplier { get; set; }
        public int IDCampaign { get; set; }
        public int IDCustCompany { get; set; }
        public decimal Amount { get; set; }
        public System.DateTime Created { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime FakturCreated { get; set; }
        public string SupplierName { get; set; }
        public string PhoneNumber { get; set; }
        public string Currency { get; set; }
        public string SearchName { get; set; }
        public string StrCreated { get; set; }
    }
}
