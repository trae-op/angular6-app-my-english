"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/publishReplay");
require("rxjs/add/observable/of");
// for adding other services 
var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.baseUrl = '../app/shared/data.json';
    }
    MainService.prototype.getData = function () {
        if (!this.allData) {
            this.allData = this.http.get(this.baseUrl)
                .map(function (response) { return response.json(); })
                .do(function (data) { return console.info('===> successful <===\n', data); })
                .publishReplay(1).refCount()
                .catch(this.handleError);
        }
        else {
            console.info('if exist data');
        }
        return this.allData;
    };
    MainService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.warn('===> Bad request <===', error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.http.service.jsce.js.map