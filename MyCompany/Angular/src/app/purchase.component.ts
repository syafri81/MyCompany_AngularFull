import { Component, OnInit } from '@angular/core';
import { inPurchase } from './models/inPurchase';
import { inPurchaseDetail } from './models/inPurchaseDetail';
import { comboTemplate } from './models/comboTemplate';
import { tblProduct } from './models/tblProduct';
import { tblPartner } from './models/tblPartner';
import { DataService } from './data.service';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'purchase-app',
    templateUrl: './purchase.component.html'
})
export class PurchaseComponent implements OnInit {
    errorMsg: string = "Error Zone";
    sureDeleteMsg: string = "Sure to delete this data?";
    modalTitle: string = "Add New";
    selectedData: inPurchase;
    DetailData: inPurchaseDetail[];
    OriDetailData: inPurchaseDetail[];

    title = 'Purchase';

    allAmount: number = 0;
    detailToggle = "disabled";

    faAddDetail = "fa-cart-arrow-down";
    faEditDetail = "fa-edit";

    IndexData: inPurchase[];
    OriData: inPurchase[];

    flagProduct: boolean = false;
    flagPartner: boolean = false;
    ComboSupplier: comboTemplate[];
    AutoCompleteProduct: tblProduct[];
    AutoCompletePartner: tblPartner[];

    private url = this.title + "/GetIndex";

    selectedDetail = new inPurchaseDetail;

    constructor(private dataService: DataService) { }

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
        this.selectedData = new inPurchase();
        this.AutoCompletePartner = new Array<tblPartner>();
        this.showLoading(true);
        this.getData();

        this.flagProduct = false;
        this.flagPartner = false;

        this.showMsg(false);
        this.showLoading(false);
    }

    mdlIsPurchase: boolean = false;
    detailModal(isDetail: boolean): void {
        //this.detailToggle = "disabled";
        this.mdlIsPurchase = isDetail;
    }
    
    mdlIsDetail: boolean = false;
    showInputDetail(isDetail: boolean): void {
        this.mdlIsDetail = isDetail;
    }

    isAddDetail: boolean = true;
    newData(): void {
        this.modalTitle = "Add New";

        this.selectedData = new inPurchase();
        this.AutoCompletePartner = new Array<tblPartner>();
        this.selectedData.IDPurchase = 0;

        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(data => { this.selectedData.IDFaktur = data });
        console.log("Faktur: " + this.selectedData.IDFaktur);

        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";

        this.selectedData.Created = new Date();

        this.selectedData.IDPartner = 0;
        //this.getComboSupplier();

        this.isAddDetail = true;
        this.DetailData = new Array<inPurchaseDetail>();

        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    }

    newDetail(): void {
        this.modalTitle = "Add Purchase";

        console.log("New, ID Purchase: " + this.selectedData.IDPurchase);        

        this.selectedDetail = new inPurchaseDetail();
        this.selectedDetail.IDPurchase = this.selectedData.IDPurchase;
        this.selectedDetail.IDDetail = 0;
        this.selectedDetail.ProductName = "";
        this.selectedDetail.Volume = 0;
        this.selectedDetail.Price = 0;
        this.selectedDetail.Amount = 0;

        this.showInputDetail(true);
        this.showMsg(false);
        this.detailToggle = "disabled";
        this.isAddDetail = true;
    }

    addDetail(): void {
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDPartner = this.selectedData.IDPartner;
        console.log("detail id:" + this.selectedDetail.IDDetail);

        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.showMsg(true);
            //this.detailModal(false);
            
            this.selectedData.IDPurchase = parseInt(data.messages[0]);
            console.log("Add, ID Purchase: " + this.selectedData.IDPurchase);
            this.getDetails(this.selectedData.IDPurchase);
            this.getData();
            this.newDetail();
        });
    }

    searchProduct(term: string): void {
        this.flagProduct = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term).subscribe(data => { this.AutoCompleteProduct = data });
    }

    onselectProduct(product: inPurchaseDetail): void {
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;

            //get price
            this.dataService.get("GeneralData/GetProductPrice?id=" + product.IDProduct).subscribe(data => { this.selectedDetail.Price = data });

            this.selectedDetail.IDProduct = product.IDProduct;
            this.flagProduct = false;
            this.showMsg(false);
        }
    }

    searchPartner(term: string): void {
        this.flagPartner = true;
        this.dataService.get("GeneralData/AutoCompletePartner?term=" + term).subscribe(data => { this.AutoCompletePartner = data });
        //if (this.AutoCompletePartner.length == 0)
        //    this.flagPartner = false;
    }
    
    onselectPartner(partner: tblPartner): void {
        if (partner.IDPartner > 0) {
            this.selectedData.Name = partner.Name;
            this.selectedData.SearchName = partner.SearchName;
            this.selectedData.IDNumber = partner.IDNumber;
            this.selectedData.IDPartner = partner.IDPartner;
            this.flagPartner = false;
            this.showMsg(false);
            this.selectedDetail = new inPurchaseDetail();
            this.AutoCompletePartner = new Array<tblPartner>();
            this.selectedDetail.IDPurchase = this.selectedData.IDPurchase;
            //this.selectedDetail.IDDetail = this.detailID;
            this.showInputDetail(true);
        }
    }

    moneyCurrency(obj: number): void {
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(data => { this.selectedData.Currency = data });
    }
    moneyFormatAmount(obj: number): void {
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(data => { this.selectedDetail.CurrencyAmount = data });
    }
    moneyFormatPrice(obj: number): void {
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(data => { this.selectedDetail.CurrencyPrice = data });
    }

    makeAmountDetail(): void {
        //console.log("flag: " + this.flag);
        if (this.flagProduct == true) {
            this.errorMsg = "Product is not found.";
            this.showMsg(true);
            return;
        }
        else {
            this.showMsg(false);
        }

        this.moneyFormatPrice(this.selectedDetail.Price);
        this.selectedDetail.Amount = this.selectedDetail.Volume * this.selectedDetail.Price;
        this.moneyFormatAmount(this.selectedDetail.Amount);
        this.allAmount = 0;
        this.allAmount += this.selectedDetail.Amount;
        //console.log("allAmount:" + this.allAmount);
        this.selectedData.Amount = this.allAmount;
        if (this.isAddDetail == true) {
            this.selectedData.Amount += this.DetailData.reduce((sum, current) => sum + current.Amount, 0);
        }
        else {
            this.selectedData.Amount = this.DetailData.reduce((sum, current) => sum + current.Amount, 0);
        }

        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";
    }
    
    confirmDelete(itemData: inPurchase): void {
        this.selectedData = itemData;
        this.deleteModal(true);
    }

    mdlIsDelete: boolean = false;
    deleteModal(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    }

    delete(): void {
        console.log("delete:" + this.selectedData.IDPurchase);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDPurchase).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }

            this.deleteModal(false);
            this.getData();
        });
    }

    confirmDeleteDetail(itemData: inPurchaseDetail): void {
        this.selectedDetail = itemData;
        console.log("iddetail:" + itemData.IDDetail);
        this.deleteModalDetail(true);
    }

    mdlIsDeleteDetail: boolean = false;
    deleteModalDetail(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    }

    deleteDetail(): void {
        console.log("delete:" + this.selectedDetail.IDDetail);
        var idPurchase = this.selectedData.IDPurchase;
        if (idPurchase > 0) {
            this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idPurchase=" + this.selectedDetail.IDPurchase).subscribe(data => {
                if (data.isSuccess == false) {
                    this.errorMsg = data.messages[0];
                    return;
                }

                this.deleteModalDetail(false);
                this.getDetails(this.selectedData.IDPurchase);
                this.newDetail();

                console.log("Amount: " + data.messages[0]);
                this.selectedData.Amount = data.messages[0];
                this.moneyCurrency(this.selectedData.Amount);
            });
        }
        else
        {
            //just remove from array data
            this.DetailData = this.DetailData.filter(m => m.IDDetail != this.selectedDetail.IDDetail);
            this.deleteModalDetail(false);
            this.newDetail();

            this.selectedData.Amount = this.DetailData.reduce((sum, current) => sum + current.Amount, 0);
            this.moneyCurrency(this.selectedData.Amount);
        }        
    }

    detail(itemData: inPurchase): void {
        this.modalTitle = "Purchase Detail";
        this.selectedData = itemData;
        this.selectedData.Created = new Date(this.selectedData.StrCreated);
        this.selectedData.SearchName = itemData.IDNumber + " - " + itemData.Name;
        this.getDetails(this.selectedData.IDPurchase);
        this.detailModal(true);
        this.newDetail();
    }

    getDetails(idPurchase: number): void {
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idPurchase).subscribe(data => { this.DetailData = data; this.OriDetailData = data });
        console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    }

    editDetail(itemData: inPurchaseDetail): void {
        this.isAddDetail = false;
        this.modalTitle = "Update Purchase";
        this.selectedDetail = itemData;
        this.selectedDetail.IDPurchase = itemData.IDPurchase;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        console.log("detail IDProduct:" + this.selectedDetail.IDProduct);
        this.showInputDetail(true);
        this.showMsg(false);
    }    

    filterIndex(value: string) {
        var data = this.OriData.filter(item => item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1)

        this.IndexData = data;
    }
}
