import { Component, OnInit } from '@angular/core';
import { tblPartner } from './models/tblPartner';
import { DataService } from './data.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'partner-app',
    templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {
    errorMsg: string = "Error Zone";
    sureDeleteMsg: string = "Sure to delete this data?";
    modalTitle: string = "Add New";
    selectedData: tblPartner;
    title = 'Partner';

    IndexData: tblPartner[];
    OriData: tblPartner[];
    
    private url = this.title + "/GetIndex";
    
    constructor(private dataService: DataService, private router: Router, private http: HttpClient) { }

    getData(): void {
        this.dataService.get(this.url).subscribe(data => { this.IndexData = data; this.OriData = data });
        console.log("partner: " + this.IndexData);
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
        this.selectedData = new tblPartner();
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
        this.modalTitle = "Add New";
        this.selectedData = new tblPartner();
        this.createModal(true);
        this.showMsg(false);
    }

    edit(itemData: tblPartner): void {
        this.modalTitle = "Update";
        this.selectedData = itemData;
        this.createModal(true);
        this.showMsg(false);
    }

    save(itemData: tblPartner): void {
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

    confirmDelete(itemData: tblPartner): void {
        this.selectedData = itemData;
        this.deleteModal(true);
    }

    mdlIsDelete: boolean = false;
    deleteModal(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    }

    delete(): void {
        console.log("delete:" + this.selectedData.IDPartner);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDPartner).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }

            this.deleteModal(false);
            this.getData();
        });
    }       

    filterIndex(value: string) {
        var data = this.OriData.filter(item => item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1)

        this.IndexData = data;
    }


    toggleActive(itemData: tblPartner): void {
        if (itemData.IsActive == true) {
            itemData.IsActive = false;
        }
        else {
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
}