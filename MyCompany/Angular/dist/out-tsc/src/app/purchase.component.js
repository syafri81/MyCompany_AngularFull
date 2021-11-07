import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { inPurchase } from './models/inPurchase';
import { inPurchaseDetail } from './models/inPurchaseDetail';
import { DataService } from './data.service';
//import { HttpClient } from '@angular/common/http';
var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(dataService) {
        this.dataService = dataService;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Purchase';
        this.allAmount = 0;
        this.detailToggle = "disabled";
        this.faAddDetail = "fa-cart-arrow-down";
        this.faEditDetail = "fa-edit";
        this.flagProduct = false;
        this.flagPartner = false;
        this.url = this.title + "/GetIndex";
        this.selectedDetail = new inPurchaseDetail;
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsPurchase = false;
        this.mdlIsDetail = false;
        this.isAddDetail = true;
        this.mdlIsDelete = false;
        this.mdlIsDeleteDetail = false;
    }
    PurchaseComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
    };
    PurchaseComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    PurchaseComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        this.selectedData = new inPurchase();
        this.AutoCompletePartner = new Array();
        this.showLoading(true);
        this.getData();
        this.flagProduct = false;
        this.flagPartner = false;
        this.showMsg(false);
        this.showLoading(false);
    };
    PurchaseComponent.prototype.detailModal = function (isDetail) {
        //this.detailToggle = "disabled";
        this.mdlIsPurchase = isDetail;
    };
    PurchaseComponent.prototype.showInputDetail = function (isDetail) {
        this.mdlIsDetail = isDetail;
    };
    PurchaseComponent.prototype.newData = function () {
        var _this = this;
        this.modalTitle = "Add New";
        this.selectedData = new inPurchase();
        this.AutoCompletePartner = new Array();
        this.selectedData.IDPurchase = 0;
        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(function (data) { _this.selectedData.IDFaktur = data; });
        console.log("Faktur: " + this.selectedData.IDFaktur);
        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";
        this.selectedData.Created = new Date();
        this.selectedData.IDPartner = 0;
        //this.getComboSupplier();
        this.isAddDetail = true;
        this.DetailData = new Array();
        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    };
    PurchaseComponent.prototype.newDetail = function () {
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
    };
    PurchaseComponent.prototype.addDetail = function () {
        var _this = this;
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDPartner = this.selectedData.IDPartner;
        console.log("detail id:" + this.selectedDetail.IDDetail);
        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            //this.detailModal(false);
            _this.selectedData.IDPurchase = parseInt(data.messages[0]);
            console.log("Add, ID Purchase: " + _this.selectedData.IDPurchase);
            _this.getDetails(_this.selectedData.IDPurchase);
            _this.getData();
            _this.newDetail();
        });
    };
    PurchaseComponent.prototype.searchProduct = function (term) {
        var _this = this;
        this.flagProduct = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term).subscribe(function (data) { _this.AutoCompleteProduct = data; });
    };
    PurchaseComponent.prototype.onselectProduct = function (product) {
        var _this = this;
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;
            //get price
            this.dataService.get("GeneralData/GetProductPrice?id=" + product.IDProduct).subscribe(function (data) { _this.selectedDetail.Price = data; });
            this.selectedDetail.IDProduct = product.IDProduct;
            this.flagProduct = false;
            this.showMsg(false);
        }
    };
    PurchaseComponent.prototype.searchPartner = function (term) {
        var _this = this;
        this.flagPartner = true;
        this.dataService.get("GeneralData/AutoCompletePartner?term=" + term).subscribe(function (data) { _this.AutoCompletePartner = data; });
        //if (this.AutoCompletePartner.length == 0)
        //    this.flagPartner = false;
    };
    PurchaseComponent.prototype.onselectPartner = function (partner) {
        if (partner.IDPartner > 0) {
            this.selectedData.Name = partner.Name;
            this.selectedData.SearchName = partner.SearchName;
            this.selectedData.IDNumber = partner.IDNumber;
            this.selectedData.IDPartner = partner.IDPartner;
            this.flagPartner = false;
            this.showMsg(false);
            this.selectedDetail = new inPurchaseDetail();
            this.AutoCompletePartner = new Array();
            this.selectedDetail.IDPurchase = this.selectedData.IDPurchase;
            //this.selectedDetail.IDDetail = this.detailID;
            this.showInputDetail(true);
        }
    };
    PurchaseComponent.prototype.moneyCurrency = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(function (data) { _this.selectedData.Currency = data; });
    };
    PurchaseComponent.prototype.moneyFormatAmount = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyAmount = data; });
    };
    PurchaseComponent.prototype.moneyFormatPrice = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyPrice = data; });
    };
    PurchaseComponent.prototype.makeAmountDetail = function () {
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
            this.selectedData.Amount += this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
        }
        else {
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
        }
        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";
    };
    PurchaseComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    PurchaseComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    PurchaseComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDPurchase);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDPurchase).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    PurchaseComponent.prototype.confirmDeleteDetail = function (itemData) {
        this.selectedDetail = itemData;
        console.log("iddetail:" + itemData.IDDetail);
        this.deleteModalDetail(true);
    };
    PurchaseComponent.prototype.deleteModalDetail = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    };
    PurchaseComponent.prototype.deleteDetail = function () {
        var _this = this;
        console.log("delete:" + this.selectedDetail.IDDetail);
        var idPurchase = this.selectedData.IDPurchase;
        if (idPurchase > 0) {
            this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idPurchase=" + this.selectedDetail.IDPurchase).subscribe(function (data) {
                if (data.isSuccess == false) {
                    _this.errorMsg = data.messages[0];
                    return;
                }
                _this.deleteModalDetail(false);
                _this.getDetails(_this.selectedData.IDPurchase);
                _this.newDetail();
                console.log("Amount: " + data.messages[0]);
                _this.selectedData.Amount = data.messages[0];
                _this.moneyCurrency(_this.selectedData.Amount);
            });
        }
        else {
            //just remove from array data
            this.DetailData = this.DetailData.filter(function (m) { return m.IDDetail != _this.selectedDetail.IDDetail; });
            this.deleteModalDetail(false);
            this.newDetail();
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
            this.moneyCurrency(this.selectedData.Amount);
        }
    };
    PurchaseComponent.prototype.detail = function (itemData) {
        this.modalTitle = "Purchase Detail";
        this.selectedData = itemData;
        this.selectedData.Created = new Date(this.selectedData.StrCreated);
        this.selectedData.SearchName = itemData.IDNumber + " - " + itemData.Name;
        this.getDetails(this.selectedData.IDPurchase);
        this.detailModal(true);
        this.newDetail();
    };
    PurchaseComponent.prototype.getDetails = function (idPurchase) {
        var _this = this;
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idPurchase).subscribe(function (data) { _this.DetailData = data; _this.OriDetailData = data; });
        console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    PurchaseComponent.prototype.editDetail = function (itemData) {
        this.isAddDetail = false;
        this.modalTitle = "Update Purchase";
        this.selectedDetail = itemData;
        this.selectedDetail.IDPurchase = itemData.IDPurchase;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        console.log("detail IDProduct:" + this.selectedDetail.IDProduct);
        this.showInputDetail(true);
        this.showMsg(false);
    };
    PurchaseComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    PurchaseComponent = tslib_1.__decorate([
        Component({
            selector: 'purchase-app',
            templateUrl: './purchase.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], PurchaseComponent);
    return PurchaseComponent;
}());
export { PurchaseComponent };
//# sourceMappingURL=purchase.component.js.map