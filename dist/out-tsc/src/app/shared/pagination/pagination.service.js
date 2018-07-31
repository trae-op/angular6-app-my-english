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
var router_1 = require("@angular/router");
// for adding other services 
var PaginationService = /** @class */ (function () {
    function PaginationService(route) {
        this.route = route;
        this.items = [];
        this.prevPage = function (pageNumber) {
            return pageNumber - 1;
        };
    }
    // pageNumber: number = Number(this.route.snapshot.params.pageNumber);
    PaginationService.prototype.group = function (array, count) {
        //console.log(this.pageNumber)
        var stringArray = '';
        var ceil = Math.ceil(array.length / count);
        for (var i = 0; i < ceil; i = i + 1) {
            stringArray = stringArray + ('[]' + ((ceil - 1) !== i ? ',' : ''));
        }
        var groups = JSON.parse('[' + stringArray + ']');
        for (var j = 0; j < groups.length; j = j + 1) {
            groups[j] = array.slice((j * count), ((j * count) + count));
        }
        return groups;
    };
    PaginationService.prototype.showNumbering = function (pageNumber, index) {
        //console.log(pageNumber)
        return pageNumber === (index + 3)
            || pageNumber === (index + 2)
            || pageNumber === (index + 1)
            || pageNumber === index
            || pageNumber === (index - 1);
    };
    PaginationService.prototype.showDots = function (pageNumber, index) {
        return pageNumber === (index + 4) || pageNumber === (index - 2);
    };
    PaginationService.prototype.nextPage = function (pageNumber) {
        return pageNumber + 1;
    };
    PaginationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], PaginationService);
    return PaginationService;
}());
exports.PaginationService = PaginationService;
//# sourceMappingURL=pagination.service.js.map