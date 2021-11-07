import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comboTemplate } from './models/comboTemplate';
//import { map } from 'rxjs/operators';

@Injectable()
export class DataService
{
    endpoint: string = "";
    currency: string = "";

    constructor(private http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get<Array<any>>(url);
    }

    post(url: string, model: any): Observable<any> {        
        return this.http.post(url, model);
    }

    delete(url: string): Observable<any> {
        return this.http.get(url);
    }    

    //autoCompleteSupplier(term: string): Observable<Array<comboTemplate>> {
    //    this.endpoint = "GeneralData/AutoCompleteSupplier?term=" + term;
    //    return this.http.get<Array<comboTemplate>>(this.endpoint);
    //}
}