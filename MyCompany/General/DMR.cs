using MyCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class DMR
{
    public bool isSuccess { get; set; }
    public List<string> messages { get; set; }

    public DMR()
    {
        isSuccess = true;
        messages = new List<string>();
    }
}

public class ComboTemplate
{
    public int ComboID { get; set; }
    public string ComboName { get; set; }
}

public class ExpendDetailTemplate: inExpendDetail
{
    public string IDFaktur { get; set; }
    public int IDSupplier { get; set; }
}