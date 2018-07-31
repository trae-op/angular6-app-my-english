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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var lodash_1 = require("lodash");
//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/publishReplay';
// import 'rxjs/add/observable/of';
var config_1 = require("../../config");
// for adding other services 
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.cacheData = {};
    }
    MainService.prototype.get = function (nameRequest, successCallback) {
        var _this = this;
        if (!this.cacheData[nameRequest]) {
            this.mainRequest('get', [this.mainUrl() + nameRequest], function (response) {
                _this.cacheData[nameRequest] = response;
                successCallback(response);
            });
        }
        else {
            successCallback(this.cacheData[nameRequest]);
        }
    };
    MainService.prototype.post = function (nameRequest, data, successCallback) {
        var _this = this;
        this.mainRequest('post', [this.mainUrl() + nameRequest, data], function (response) {
            _this.cacheData[nameRequest].push(response);
            successCallback(response);
        });
    };
    MainService.prototype.update = function (nameRequest, data, successCallback) {
        var _this = this;
        this.mainRequest('put', [this.mainUrl() + nameRequest, data], function (response) {
            _this.cacheData[nameRequest][_this.cacheIndex(nameRequest, { _id: response._id })] = response;
            successCallback(response);
        });
    };
    MainService.prototype.deleteById = function (nameRequest, id, successCallback) {
        var _this = this;
        this.mainRequest('delete', [this.mainUrl() + nameRequest + '/' + id], function (response) {
            _this.cacheData[nameRequest].splice(_this.cacheIndex(nameRequest, { _id: id }), 1);
            successCallback(response);
        });
    };
    MainService.prototype.getById = function (nameRequest, id, successCallback) {
        var _this = this;
        this.get(nameRequest, function (response) { return successCallback(_this.findByValue(id, '_id', response)); });
    };
    MainService.prototype.getByEmail = function (nameRequest, email, successCallback) {
        var _this = this;
        this.get(nameRequest, function (response) { return successCallback(_this.findByValue(email, 'creator_email', response)); });
    };
    MainService.prototype.findByValue = function (value, prop, collection) {
        return lodash_1.default.filter(collection, JSON.parse('{"' + prop + '":"' + value + '"}'));
    };
    MainService.prototype.mainRequest = function (typeRequest, options, successCallback) {
        var _this = this;
        var checkType = (options.length > 1)
            ? this.http[typeRequest](options[0], options[1])
            : this.http[typeRequest](options[0]);
        checkType.subscribe(function (response) { return successCallback(response.json()); }, function (error) { return _this.handleError(error); });
        //.map((response: Response) => response.json())
        //.do(data => console.info('===> successful <===\n', data))
        // Caching of data
        //.publishReplay(1).refCount()
        //.catch(this.handleError);
    };
    MainService.prototype.cacheIndex = function (name, data) {
        return lodash_1.default.findIndex(this.cacheData[name], data);
    };
    MainService.prototype.mainUrl = function () {
        return config_1.config.API_URL + '/';
    };
    MainService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.warn('===> Something wrong!!! <===\n', error);
        //return Observable.throw(error.json().error || 'Server error');
    };
    MainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
//# sourceMappingURL=main.http.service.jsce.js.map