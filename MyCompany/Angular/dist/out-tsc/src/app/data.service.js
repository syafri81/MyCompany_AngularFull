import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.endpoint = "";
        this.currency = "";
    }
    DataService.prototype.get = function (url) {
        return this.http.get(url);
    };
    DataService.prototype.post = function (url, model) {
        return this.http.post(url, model);
    };
    DataService.prototype.delete = function (url) {
        return this.http.get(url);
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map