import { Component, OnInit } from '@angular/core';
import { tblUser } from './models/tblUser';
import { DataService } from './data.service';

@Component({
    selector: 'user-app',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    title = 'User';
    IndexData: tblUser[];
    private url = "UserManagement/GetIndex";

    constructor(private dataService: DataService) { }

    getData(): void {
        this.dataService.get(this.url).subscribe(data => { this.IndexData = data; });
    }

    ngOnInit(): void {
        this.getData();
    }
}
