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
var pagination_service_1 = require("./pagination.service");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(route, paginationService) {
        this.route = route;
        this.paginationService = paginationService;
        this.pageNumber = Number(this.route.snapshot.params.pageNumber);
    }
    // pagination: any;
    PaginationComponent.prototype.ngOnInit = function () {
        // this.items = [];
        // this.pagination = [];
        console.log('ngOnInit', this.paginationService.items);
        // setTimeout(() => {
        //   let paginationGroup = this.paginationService.group(this.paginationService.items, 3);
        //   //this.pagination = paginationGroup;
        //   this.paginationService.items = paginationGroup[this.pageNumber - 1];
        // }, 1000);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "items", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: './pagination.component.html'
            //styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            pagination_service_1.PaginationService])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map