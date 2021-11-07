import { Component, OnInit } from '@angular/core';
import { tblSupplier } from './models/tblSupplier';
import { tblSupplierContact } from './models/tblSupplierContact';
import { DataService } from './data.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'supplier-app',
    templateUrl: './supplier.component.html'
})
export class SupplierComponent implements OnInit {
    errorMsg: string = "Error Zone";
    sureDeleteMsg: string = "Sure to delete this data?";
    modalTitle: string = "Add New";
    selectedData: tblSupplier; 
    title = 'Supplier';

    addContactToggle = "";

    IndexData: tblSupplier[];
    OriData: tblSupplier[];

    DetailData: tblSupplierContact[];
    private url = this.title + "/GetIndex";

    selectedContact = new tblSupplierContact;

    constructor(private dataService: DataService, private router: Router, private http: HttpClient) { }

    getData(): void {
        this.dataService.get(this.url).subscribe(data => { this.IndexData = data; this.OriData = data });
        console.log("oridata: " + this.IndexData);
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
        this.selectedData = new tblSupplier();
        this.showLoading(true);
        this.getData();
        this.showMsg(false);
        this.showLoading(false);
    }

    mdlIsCreate: boolean = false;
    createModal(isCreate: boolean): void {
        this.mdlIsCreate = isCreate;
    }

    newData(): void {
        this.addContactToggle = "";
        this.modalTitle = "Add New";
        this.selectedData = new tblSupplier();
        this.createModal(true);
        this.showMsg(false);
    }

    edit(itemData: tblSupplier): void {
        this.modalTitle = "Update";
        this.selectedData = itemData;
        this.createModal(true);
        this.showMsg(false);
    }

    save(itemData: tblSupplier): void {
        this.dataService.post(this.title + "/Save", itemData).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.showMsg(true);
            this.createModal(false);
            this.getData();
        });
    }

    confirmDelete(itemData: tblSupplier): void {
        this.selectedData = itemData;
        this.deleteModal(true);
    }

    mdlIsDelete: boolean = false;
    deleteModal(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    }

    delete(): void {
        console.log("delete:" + this.selectedData.IDSupplier);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDSupplier).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            
            this.deleteModal(false);
            this.getData();
        });
    }

    mdlIsContact: boolean = false;
    detailModal(isDetail: boolean): void {
        this.mdlIsContact = isDetail;
    }

    detail(itemData: tblSupplier): void {
        this.modalTitle = "Contact Detail";
        this.selectedData = itemData;
        this.getDetails(this.selectedData.IDSupplier);
        this.detailModal(true);
    }

    getDetails(idSupplier: number): void {
        this.showLoading(true);
        this.showDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idSupplier).subscribe(data => { this.DetailData = data; });
        console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
        
    }

    newDetail(): void {
        this.modalTitle = "Add Contact";
        this.selectedContact = new tblSupplierContact();
        this.selectedContact.IDSupplier = this.selectedData.IDSupplier;
        //console.log("detail IDSupplier:" + this.selectedContact.IDSupplier);
        this.showDetail(true);
        this.showMsg(false);
    }

    mdlIsDetail: boolean = false;
    showDetail(isDetail: boolean): void {
        this.mdlIsDetail = isDetail;
    }

    editDetail(itemData: tblSupplierContact): void {
        this.addContactToggle = "disabled";
        this.modalTitle = "Update Contact";
        this.selectedContact = itemData;
        this.selectedContact.IDSupplier = this.selectedData.IDSupplier;
        console.log("detail IDSupplier:" + this.selectedContact.IDSupplier);
        this.showDetail(true);
        this.showMsg(false);
    }

    saveDetail(itemDetail: tblSupplierContact): void {
        this.dataService.post(this.title + "/SaveDetail", itemDetail).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.showLoading(true);
            this.showMsg(true);
            this.showDetail(false);
            this.getDetails(this.selectedData.IDSupplier);
            this.showLoading(false);
            this.addContactToggle = "";
        });
    }

    filterIndex(value: string)
    {
        var data = this.OriData.filter(item => item.SupplierName.toLowerCase().indexOf(value.toLowerCase()) > -1)
        
        this.IndexData = data;
    }

    toggleActive(itemData: tblSupplier): void {
        if (itemData.IsActive == true)
        {
            itemData.IsActive = false;
        }
        else
        {
            itemData.IsActive = true;
        }
        this.dataService.post(this.title + "/ToggleActive", itemData).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.showMsg(true);
            this.getData();
        });
    }

    toggleActiveDetail(itemData: tblSupplierContact): void {
        if (itemData.IsActive == true) {
            itemData.IsActive = false;
        }
        else {
            itemData.IsActive = true;
        }
        this.dataService.post(this.title + "/ToggleActiveDetail", itemData).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                return;
            }

            this.showMsg(true);
            this.getData();
        });
    }
}
