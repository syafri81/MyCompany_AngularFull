import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { AssignCampaignTemplate } from './models/AssignCampaignTemplate';

@Component({
    selector: 'dashboard-app',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    isDisplayCampaign: boolean = false;
    Campaigns: AssignCampaignTemplate[];

    constructor(private dataService: DataService, private router: Router) { }
    ngOnInit(): void {
        this.dataService.get("Dashboard/DisplayCampaign").subscribe(data => { this.isDisplayCampaign = data });
        this.dataService.get("Dashboard/GetCampaigns").subscribe(data => { this.Campaigns = data });
    }

    goToCampaign(itemData: AssignCampaignTemplate): void {
        this.isDisplayCampaign = false;
        this.dataService.get("Dashboard/GoToCampaign?id=" + itemData.CampaignID + "&campaignName=" + itemData.CampaignName).subscribe();
        this.router.navigateByUrl("");
    }
}