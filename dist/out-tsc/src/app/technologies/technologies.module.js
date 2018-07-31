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
//import { MainService } from '../../shared/main.service';
//import { AppComponent } from '../../app.component';
var technologies_component_1 = require("./technologies.component");
var TechnologiesModule = /** @class */ (function () {
    function TechnologiesModule() {
    }
    TechnologiesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                technologies_component_1.TechnologiesComponent
            ],
        })
    ], TechnologiesModule);
    return TechnologiesModule;
}());
exports.TechnologiesModule = TechnologiesModule;
//# sourceMappingURL=technologies.module.js.map