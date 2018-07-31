"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var detail_component_1 = require("./detail.component");
var forms_component_1 = require("../shared/forms/forms.component");
var pagination_component_1 = require("../shared/pagination/pagination.component");
var popups_service_1 = require("../shared/popups/popups.service");
var pagination_service_1 = require("../shared/pagination/pagination.service");
var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([{
                        path: 'detail/:titleEn/page/:pageNumber', component: detail_component_1.DetailComponent
                    }])
            ],
            declarations: [
                detail_component_1.DetailComponent,
                forms_component_1.FormsComponent,
                pagination_component_1.PaginationComponent
            ],
            providers: [
                popups_service_1.PopupsService,
                pagination_service_1.PaginationService
            ]
        })
    ], DetailModule);
    return DetailModule;
}());
exports.DetailModule = DetailModule;
//# sourceMappingURL=detail.module.js.map