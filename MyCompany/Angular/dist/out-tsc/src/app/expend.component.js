import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { inExpend } from './models/inExpend';
import { inExpendDetail } from './models/inExpendDetail';
import { DataService } from './data.service';
import { FormatLocalDate } from './data.formatdate';
//import { HttpClient } from '@angular/common/http';
var ExpendComponent = /** @class */ (function () {
    function ExpendComponent(dataService, dateFormatPipe) {
        this.dataService = dataService;
        this.dateFormatPipe = dateFormatPipe;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Expend';
        this.allAmount = 0;
        this.detailToggle = "disabled";
        this.faAddDetail = "fa-cart-arrow-down";
        this.faEditDetail = "fa-edit";
        this.flag = false;
        this.url = this.title + "/GetIndex";
        this.selectedDetail = new inExpendDetail;
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsExpend = false;
        this.isAddDetail = true;
        this.mdlIsDetail = false;
        this.mdlIsDelete = false;
        this.mdlIsDeleteDetail = false;
    }
    ExpendComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
    };
    ExpendComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    ExpendComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    ExpendComponent.prototype.ngOnInit = function () {
        this.selectedData = new inExpend();
        this.showLoading(true);
        this.getData();
        this.flag = false;
        this.showMsg(false);
        this.showLoading(false);
    };
    ExpendComponent.prototype.detailModal = function (isDetail) {
        //this.detailToggle = "disabled";
        this.mdlIsExpend = isDetail;
    };
    ExpendComponent.prototype.getComboSupplier = function () {
        var _this = this;
        this.dataService.get(this.title + "/ComboSupplier").subscribe(function (data) { _this.ComboSupplier = data; });
    };
    ExpendComponent.prototype.newData = function () {
        var _this = this;
        this.modalTitle = "Add New";
        this.selectedData = new inExpend();
        this.selectedData.IDExpend = 0;
        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(function (data) { _this.selectedData.IDFaktur = data; });
        //console.log("Faktur: " + this.selectedData.IDFaktur);
        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";
        //this.selectedData.CreatedDate = this.dateFormatPipe.transform(new Date());
        this.selectedData.Created = new Date();
        this.selectedData.IDSupplier = 0;
        this.getComboSupplier();
        this.isAddDetail = true;
        this.DetailData = new Array();
        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    };
    ExpendComponent.prototype.newDetail = function () {
        var _this = this;
        this.modalTitle = "Add Expend";
        //console.log("ID Supplier: " + this.selectedData.IDSupplier);
        if (this.ComboSupplier != null) {
            var foundSupplier = this.ComboSupplier.find(function (m) { return m.ComboID == _this.selectedData.IDSupplier; });
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
    };
    ExpendComponent.prototype.showInputDetail = function (isDetail) {
        this.mdlIsDetail = isDetail;
    };
    ExpendComponent.prototype.addDetail = function () {
        var _this = this;
        this.makeAmountDetail();
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDSupplier = this.selectedData.IDSupplier;
        this.selectedDetail.Created = this.selectedData.Created;
        //alert(this.selectedDetail.Created);
        //return;
        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.selectedData.IDExpend = parseInt(data.messages[0]);
            //console.log("Add, ID Expend: " + this.selectedData.IDExpend);
            _this.getDetails(_this.selectedData.IDExpend);
            _this.getData();
            _this.newDetail();
        });
    };
    ExpendComponent.prototype.searchProduct = function (term, supplierID) {
        var _this = this;
        this.flag = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term + "&supplierID=" + supplierID).subscribe(function (data) { _this.AutoCompleteProduct = data; });
    };
    ExpendComponent.prototype.onselectProduct = function (product) {
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;
            //this.selectedDetail.SellPrice = product.SellPrice;
            this.selectedDetail.IDProduct = product.IDProduct;
            this.flag = false;
            this.showMsg(false);
        }
    };
    ExpendComponent.prototype.moneyCurrency = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(function (data) { _this.selectedData.Currency = data; });
    };
    ExpendComponent.prototype.moneyFormatBuy = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyBuyAmount = data; });
    };
    ExpendComponent.prototype.moneyFormatSell = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencySellAmount = data; });
    };
    ExpendComponent.prototype.makeAmountDetail = function () {
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
        if (this.isAddDetail == true) {
            this.selectedData.Amount += this.DetailData.reduce(function (sum, current) { return sum + current.BuyAmount; }, 0);
        }
        else {
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.BuyAmount; }, 0);
        }
        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";
    };
    ExpendComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    ExpendComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    ExpendComponent.prototype.delete = function () {
        var _this = this;
        //console.log("delete:" + this.selectedData.IDExpend);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDExpend).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    ExpendComponent.prototype.confirmDeleteDetail = function (itemData) {
        this.selectedDetail = itemData;
        this.deleteModalDetail(true);
    };
    ExpendComponent.prototype.deleteModalDetail = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    };
    ExpendComponent.prototype.deleteDetail = function () {
        var _this = this;
        //console.log("delete:" + this.selectedDetail.IDDetail);
        this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idExpend=" + this.selectedDetail.IDExpend).subscribe(function (data) {
            if (data.isSuccess == false) {
                _this.errorMsg = data.messages[0];
                return;
            }
            _this.deleteModalDetail(false);
            _this.getDetails(_this.selectedData.IDExpend);
            _this.newDetail();
            console.log("Amount: " + data.messages[0]);
            _this.selectedData.Amount = data.messages[0];
            _this.moneyCurrency(_this.selectedData.Amount);
        });
    };
    ExpendComponent.prototype.detail = function (itemData) {
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
    };
    ExpendComponent.prototype.getDetails = function (idExpend) {
        var _this = this;
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idExpend).subscribe(function (data) { _this.DetailData = data; _this.OriDetailData = data; });
        //console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    ExpendComponent.prototype.editDetail = function (itemData) {
        this.isAddDetail = false;
        this.modalTitle = "Update Expend";
        //console.log("edit:" + itemData.CurrencyBuyAmount);
        this.selectedDetail = itemData;
        this.selectedDetail.IDExpend = itemData.IDExpend;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        //console.log("detail IDExpend:" + this.selectedDetail.IDExpend);
        this.showInputDetail(true);
        this.showMsg(false);
    };
    ExpendComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.IDFaktur.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    ExpendComponent = tslib_1.__decorate([
        Component({
            selector: 'expend-app',
            templateUrl: './expend.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, FormatLocalDate])
    ], ExpendComponent);
    return ExpendComponent;
}());
export { ExpendComponent };
//# sourceMappingURL=expend.component.js.map