import { Component, OnInit } from '@angular/core';
import { inExpend } from './models/inExpend';
import { inExpendDetail } from './models/inExpendDetail';
import { comboTemplate } from './models/comboTemplate';
import { tblProduct } from './models/tblProduct';
import { DataService } from './data.service';
import { FormatLocalDate } from './data.formatdate';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'expend-app',
    templateUrl: './expend.component.html'
})
export class ExpendComponent implements OnInit {
    errorMsg: string = "Error Zone";
    sureDeleteMsg: string = "Sure to delete this data?";
    modalTitle: string = "Add New";
    selectedData: inExpend;
    DetailData: inExpendDetail[];
    OriDetailData: inExpendDetail[];

    title = 'Expend';

    allAmount: number = 0;
    detailToggle = "disabled";

    faAddDetail = "fa-cart-arrow-down";
    faEditDetail = "fa-edit";

    IndexData: inExpend[];
    OriData: inExpend[];

    flag: boolean = false;
    ComboSupplier: comboTemplate[];
    AutoCompleteProduct: tblProduct[];

    private url = this.title + "/GetIndex";

    selectedDetail = new inExpendDetail;

    constructor(private dataService: DataService, private dateFormatPipe: FormatLocalDate) { }

    getData(): void {
        this.dataService.get(this.url).subscribe(data => { this.IndexData = data; this.OriData = data });
    }

    mdlIsMsg: boolean = false;
    showMsg(isError: boolean): void {
        this.mdlIsMsg = isError;
    }

    mdlIsLoading: boolean = false;
    showLoading(isLoading: boolean): void {
        this.mdlIsLoading = isLoading;
    }

    ngOnInit(): void {
        this.selectedData = new inExpend();
        this.showLoading(true);
        this.getData();

        this.flag = false;
        
        this.showMsg(false);
        this.showLoading(false);
    }

    mdlIsExpend: boolean = false;
    detailModal(isDetail: boolean): void {
        //this.detailToggle = "disabled";
        this.mdlIsExpend = isDetail;
    }    

    getComboSupplier(): void {
        this.dataService.get(this.title + "/ComboSupplier").subscribe(data => { this.ComboSupplier = data });
    }

    isAddDetail: boolean = true;
    newData(): void {
        this.modalTitle = "Add New";

        this.selectedData = new inExpend();
        this.selectedData.IDExpend = 0;

        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(data => { this.selectedData.IDFaktur = data });
        //console.log("Faktur: " + this.selectedData.IDFaktur);

        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";

        //this.selectedData.CreatedDate = this.dateFormatPipe.transform(new Date());
        this.selectedData.Created = new Date();

        this.selectedData.IDSupplier = 0;
        this.getComboSupplier();

        this.isAddDetail = true;
        this.DetailData = new Array<inExpendDetail>();

        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    }    

    newDetail(): void {
        this.modalTitle = "Add Expend";

        //console.log("ID Supplier: " + this.selectedData.IDSupplier);
        if (this.ComboSupplier != null)
        {
            var foundSupplier = this.ComboSupplier.find(m => m.ComboID == this.selectedData.IDSupplier);
            if (foundSupplier != null)
                this.selectedData.SupplierName = foundSupplier.ComboName;
        }        
                
        this.selectedDetail = new inExpendDetail();
        this.selectedDetail.IDExpend = this.selectedData.IDExpend;
        this.selectedDetail.IDDetail = 0;
        this.selectedDetail.ProductName = "";
        this.selectedDetail.Volume = 0;
        this.selectedDetail.BuyPrice = 0;
        this.selectedDetail.BuyAmount = 0;
        this.selectedDetail.SellPrice = 0;
        this.selectedDetail.SellAmount = 0;
        this.selectedDetail.CurrencySellAmount = "";
        this.selectedDetail.CurrencyBuyAmount = "";
        
        this.showInputDetail(true);
        this.showMsg(false);
        this.detailToggle = "disabled";
        this.isAddDetail = true;
    }

    mdlIsDetail: boolean = false;
    showInputDetail(isDetail: boolean): void {
        this.mdlIsDetail = isDetail;
    }
    
    addDetail(): void {
        this.makeAmountDetail();
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDSupplier = this.selectedData.IDSupplier;
        this.selectedDetail.Created = this.selectedData.Created;

        //alert(this.selectedDetail.Created);
        //return;

        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.selectedData.IDExpend = parseInt(data.messages[0]);
            //console.log("Add, ID Expend: " + this.selectedData.IDExpend);
            this.getDetails(this.selectedData.IDExpend);
            this.getData();
            this.newDetail();
        });
    }
   
    searchProduct(term: string, supplierID: number): void {
        this.flag = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term + "&supplierID=" + supplierID).subscribe(data => { this.AutoCompleteProduct = data });        
    }
    
    onselectProduct(product: tblProduct): void {
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;
            //this.selectedDetail.SellPrice = product.SellPrice;
            this.selectedDetail.IDProduct = product.IDProduct;
            this.flag = false;
            this.showMsg(false);
        }
    }

    moneyCurrency(obj: number): void {
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(data => { this.selectedData.Currency = data });
    }
    moneyFormatBuy(obj: number): void {
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(data => { this.selectedDetail.CurrencyBuyAmount = data });
    }
    moneyFormatSell(obj: number): void {
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(data => { this.selectedDetail.CurrencySellAmount = data });
    }

    makeAmountDetail(): void {
        //console.log("flag: " + this.flag);
        if (this.flag == true) {
            this.errorMsg = "Product is not found.";
            this.showMsg(true);
            return;
        }
        else {
            this.showMsg(false);
        }

        this.selectedDetail.BuyAmount = this.selectedDetail.Volume * this.selectedDetail.BuyPrice;
        this.moneyFormatBuy(this.selectedDetail.BuyAmount);
            
        this.selectedDetail.SellAmount = this.selectedDetail.Volume * this.selectedDetail.SellPrice;
        this.moneyFormatSell(this.selectedDetail.SellAmount);

        //console.log("amount sell: " + this.selectedDetail.CurrencySell);
        this.allAmount = 0;
        this.allAmount += this.selectedDetail.BuyAmount;
        //console.log("allAmount:" + this.allAmount);
        this.selectedData.Amount = this.allAmount;
        if (this.isAddDetail == true)
        {
            this.selectedData.Amount += this.DetailData.reduce((sum, current) => sum + current.BuyAmount, 0);
        }
        else
        {
            this.selectedData.Amount = this.DetailData.reduce((sum, current) => sum + current.BuyAmount, 0);
        }
        
        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";        
    }
    
    confirmDelete(itemData: inExpend): void {
        this.selectedData = itemData;
        this.deleteModal(true);
    }

    mdlIsDelete: boolean = false;
    deleteModal(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    }

    delete(): void {
        //console.log("delete:" + this.selectedData.IDExpend);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDExpend).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }

            this.deleteModal(false);
            this.getData();
        });
    }

    confirmDeleteDetail(itemData: inExpendDetail): void {
        this.selectedDetail = itemData;
        this.deleteModalDetail(true);
    }

    mdlIsDeleteDetail: boolean = false;
    deleteModalDetail(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    }

    deleteDetail(): void {
        //console.log("delete:" + this.selectedDetail.IDDetail);
        this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idExpend=" + this.selectedDetail.IDExpend).subscribe(data => {
            if (data.isSuccess == false) {
                this.errorMsg = data.messages[0];
                return;
            }

            this.deleteModalDetail(false);
            this.getDetails(this.selectedData.IDExpend);
            this.newDetail();

            console.log("Amount: " + data.messages[0]);
            this.selectedData.Amount = data.messages[0];
            this.moneyCurrency(this.selectedData.Amount);
        });
    }

    
    detail(itemData: inExpend): void {
        this.modalTitle = "Expend Detail";
        this.selectedData = itemData;

        //var pattern = /Date\(([^)]+)\)/;
        //var results = pattern.exec(itemData.Created.toString());
        //var dt = new Date(parseFloat(results[1]));
        //var a = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
        //console.log("strDate: " + itemData.StrCreated);
        //console.log("Expend Date: " + a);

        this.selectedData.Created = new Date(this.selectedData.StrCreated);
        this.getDetails(this.selectedData.IDExpend);
        this.detailModal(true);
        this.newDetail();
    }

    getDetails(idExpend: number): void {
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idExpend).subscribe(data => { this.DetailData = data; this.OriDetailData = data });
        //console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);

    }

    editDetail(itemData: inExpendDetail): void {
        this.isAddDetail = false;
        this.modalTitle = "Update Expend";
        //console.log("edit:" + itemData.CurrencyBuyAmount);
        this.selectedDetail = itemData;
        this.selectedDetail.IDExpend = itemData.IDExpend;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        //console.log("detail IDExpend:" + this.selectedDetail.IDExpend);
        this.showInputDetail(true);
        this.showMsg(false);
    }
        
    filterIndex(value: string) {
        var data = this.OriData.filter(item => item.IDFaktur.toLowerCase().indexOf(value.toLowerCase()) > -1)

        this.IndexData = data;
    }
}
