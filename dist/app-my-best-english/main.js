(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header-top></header-top>\n\n<article class=\"loader-gif pt-5\" [ngClass]=\"{'hide-loader' : !activateLoader()}\">\n    <router-outlet></router-outlet>\n</article>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-gif:before {\n  background: url('loader.gif') center no-repeat;\n  background-size: 70%;\n  content: \"\";\n  display: block;\n  height: 106px;\n  left: 50%;\n  margin-top: -53px;\n  margin-left: -53px;\n  opacity: 1;\n  position: absolute;\n  top: 50%;\n  visibility: visible;\n  width: 106px;\n  z-index: 9999; }\n\n.loader-gif.hide-loader:before {\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 0s, opacity 0.5s ease-out;\n  transition-delay: 0.5s; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(mainService, mainAuthorizationService) {
        this.mainService = mainService;
        this.mainAuthorizationService = mainAuthorizationService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // It's removing session after day
        this.mainAuthorizationService.timeSession().cleanSession();
    };
    AppComponent.prototype.activateLoader = function () {
        return this.mainService.activateLoader;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_2__["MainAuthorizationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _shared_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/forms/forms.component */ "./src/app/shared/forms/forms.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
/* harmony import */ var _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/popups/popups.service */ "./src/app/shared/popups/popups.service.ts");
/* harmony import */ var _shared_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pagination/pagination.service */ "./src/app/shared/pagination/pagination.service.ts");
/* harmony import */ var _shared_main_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/main-service/auth.interceptor */ "./src/app/shared/main-service/auth.interceptor.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"]("184315939079210")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"]("607355219083-p7ven3qhii2kijmd1utei3h260ph8dk7.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialLoginModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageModule"].withConfig({
                    prefix: 'my-app-english',
                    storageType: 'localStorage'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_22__["ROUTES"])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
                _shared_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__["FormsComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _shared_main_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_16__["MainService"],
                _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_17__["MainAuthorizationService"],
                _shared_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_19__["PaginationService"],
                _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_18__["PopupsService"],
                _home_home_service__WEBPACK_IMPORTED_MODULE_21__["HomeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");



var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'detail/:titleEn/page/:pageNumber', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"] },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <forms\n      [type]=\"'popup'\"\n      [close]=\"c\"\n      [dismiss]=\"d\"\n      [title]=\"titleForm\"\n      [dataForm]=\"fields\"\n      (submit)=\"onSubmit($event)\">\n    </forms>\n  </ng-template>\n\n  <h1 class=\"mt-3 mb-3 h3\">{{title}}</h1>\n  <button *ngIf=\"checkAuthorization() && items && getUser().email === items[0].creator_email\" class=\"btn btn-lg btn-primary rounded-0 col-sm-2 col-lg-auto\" (click)=\"addPopup(content)\">Add</button>\n\n    <div class=\"card mt-2 mb-2 rounded-0\" *ngFor=\"let item of items; let i = index;\" [ngClass]=\"{'hb' : getBorderStatus(item.descriptionEn)}\">\n      <div class=\"card-block\">\n        <p class=\"card-text\">{{item.descriptionEn}}</p>\n        <p class=\"card-text black\">{{item.descriptionRus}}</p>\n        <div *ngIf=\"checkAuthorization() && items && getUser().email === items[0].creator_email\">\n          <button type=\"button\" class=\"btn btn-outline-primary rounded-0\" (click)=\"update(content, item, i)\">edit</button>\n          <button type=\"button\" class=\"btn btn-outline-danger rounded-0\" (click)=\"delete(item._id, i)\">delete</button>\n        </div>\n      </div>\n    </div>\n\n  <ngb-pagination *ngIf=\"paginationOptions.paginationGroup.length > 1\" [maxSize]=\"5\" [collectionSize]=\"paginationOptions.paginationGroup.length * 10\" [(page)]=\"paginationOptions.page\" [boundaryLinks]=\"true\" (pageChange)=\"onPageChange($event)\" aria-label=\"Default pagination\"></ngb-pagination>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.scss":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-block {\n  padding: 10px; }\n  .card-block button {\n    margin: 0 10px 10px 0; }\n  .card-text.black {\n  background-color: black;\n  color: white;\n  display: table;\n  font-size: 0.8rem;\n  padding: 10px; }\n  .hb {\n  border-top: 5px solid blue; }\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/popups/popups.service */ "./src/app/shared/popups/popups.service.ts");
/* harmony import */ var _shared_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/pagination/pagination.service */ "./src/app/shared/pagination/pagination.service.ts");
/* harmony import */ var _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, mainService, popupsService, paginationService, mainAuthorizationService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.popupsService = popupsService;
        this.paginationService = paginationService;
        this.mainAuthorizationService = mainAuthorizationService;
        this.title = this.route.snapshot.params.titleEn;
        // data default for "ngb-pagination"
        this.paginationOptions = {
            page: 1,
            paginationGroup: [],
            itemsPage: 5
        };
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields = [
            {
                type: 'text',
                name: 'title_en',
                placeholder: 'title english',
                text: '',
                required: true
            },
            {
                type: 'text',
                name: 'title_rus',
                placeholder: 'title russion',
                text: '',
                required: true
            },
            {
                type: 'textarea',
                name: 'description_en',
                placeholder: 'description english',
                text: '',
                required: true
            },
            {
                type: 'textarea',
                name: 'description_rus',
                placeholder: 'description russion',
                text: '',
                required: true
            }
        ];
        this.updatePagination().then(function (paginationGroup) {
            _this.items = paginationGroup[_this.pageNumber() - 1];
            _this.paginationOptions.page = _this.pageNumber();
            //console.log(this.items[0].creator_email)
        });
    };
    DetailComponent.prototype.pageNumber = function () {
        return Number(this.route.snapshot.params.pageNumber);
    };
    DetailComponent.prototype.checkAuthorization = function () {
        return this.mainAuthorizationService.checkAuthorization();
    };
    DetailComponent.prototype.onPageChange = function (pageNumber) {
        this.router.navigate(['/detail/' + this.title + '/page/' + pageNumber]);
        this.items = this.paginationOptions.paginationGroup[pageNumber - 1];
    };
    DetailComponent.prototype.getUser = function () {
        return this.mainAuthorizationService.getUser();
    };
    DetailComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.filled) {
            var dataForm = {
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.getUser().email
            };
            if (this.checkControlPopup === 'update') {
                dataForm['_id'] = this.idTranslation;
            }
            this.mainService[this.checkControlPopup]('translations', dataForm)
                .then(function (response) {
                if (_this.checkControlPopup === 'post') {
                    _this.items.push(response);
                    _this.updatePagination().then(function (paginationGroup) {
                        _this.items = paginationGroup[paginationGroup.length - 1];
                        _this.router.navigate(['/detail/' + _this.title + '/page/' + paginationGroup.length]);
                        _this.paginationOptions.page = paginationGroup.length;
                    });
                }
                else {
                    _this.items[_this.indexTranslation] = response;
                }
            });
        }
    };
    DetailComponent.prototype.getBorderStatus = function (text) {
        return text.search(/\<hb\>$/) > 0 ? true : false;
    };
    DetailComponent.prototype.update = function (content, currentData, index) {
        this.checkControlPopup = 'update';
        this.indexTranslation = index;
        this.idTranslation = currentData._id;
        this.titleForm = 'Update Translation';
        this.fields[0].text = currentData.titleEn;
        this.fields[1].text = currentData.titleRus;
        this.fields[2].text = currentData.descriptionEn;
        this.fields[3].text = currentData.descriptionRus;
        this.popupsService.openPopup(content);
    };
    DetailComponent.prototype.addPopup = function (content) {
        this.checkControlPopup = 'post';
        this.titleForm = 'Add Translation';
        this.fields[0].text = this.items[0].titleEn;
        this.fields[1].text = this.items[0].titleRus;
        this.fields[2].text = '';
        this.fields[3].text = '';
        this.popupsService.openPopup(content);
    };
    DetailComponent.prototype.delete = function (id, index) {
        var _this = this;
        this.mainService.deleteById('translations', id).then(function (response) {
            _this.items.splice(index, 1);
            _this.updatePagination().then(function (paginationGroup) {
                _this.items = paginationGroup[_this.pageNumber() - 1];
            });
        });
    };
    DetailComponent.prototype.updatePagination = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.mainService.get('translations').then(function (response) {
                var findByValue = _this.mainService.findByValue(_this.title, 'titleEn', response);
                _this.paginationOptions.paginationGroup = _this.paginationService.group(findByValue, _this.paginationOptions.itemsPage);
                resolve(_this.paginationOptions.paginationGroup);
            });
        });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_3__["PopupsService"],
            _shared_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"],
            _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_5__["MainAuthorizationService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <forms\n        [type]=\"'popup'\"\n        [close]=\"c\"\n        [dismiss]=\"d\"\n        [title]=\"titleForm\"\n        [dataForm]=\"fields\"\n        (submit)=\"onSubmit($event)\">\n    </forms>\n</ng-template>\n\n<br />\n\n<button *ngIf=\"checkAuthorization()\" class=\"btn btn-lg btn-primary rounded-0 mt-1 mb-2 mr-2 col-sm-3 col-lg-auto\" (click)=\"addPopup(content)\">Create</button>\n<div *ngIf=\"checkAuthorization()\" class=\"form-check form-check-inline mb-0\">\n    <label>Find Only Mine</label>\n    <input class=\"ml-2\" type=\"checkbox\" (change)=\"findOnlyMine()\" />\n</div>\n\n<div class=\"card mt-2 rounded-0\" *ngFor=\"let translation of translations; let i = index\">\n  <div class=\"card-block\">\n    <h4><a [routerLink]=\"['/detail/' + translation.titleEn + '/page/' + 1]\">{{translation.titleEn}}</a></h4>\n    <p class=\"card-text\">{{translation.descriptionEn}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-block {\n  padding: 10px; }\n  .card-block button {\n    margin: 0 10px 10px 0; }\n  .translations .card-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
/* harmony import */ var _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/popups/popups.service */ "./src/app/shared/popups/popups.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router';





var HomeComponent = /** @class */ (function () {
    function HomeComponent(mainService, mainAuthorizationService, popupsService, homeService) {
        this.mainService = mainService;
        this.mainAuthorizationService = mainAuthorizationService;
        this.popupsService = popupsService;
        this.homeService = homeService;
    }
    //showMine: boolean = false;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields = [
            {
                type: 'text',
                name: 'title_en',
                placeholder: 'title english',
                text: '',
                required: true
            },
            {
                type: 'text',
                name: 'title_rus',
                placeholder: 'title russion',
                text: '',
                required: true
            },
            {
                type: 'textarea',
                name: 'description_en',
                placeholder: 'description english',
                text: '',
                required: true
            },
            {
                type: 'textarea',
                name: 'description_rus',
                placeholder: 'description russion',
                text: '',
                required: true
            }
        ];
        this.mainService.get('translations').then(function (response) {
            _this.translations = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.unionBy(response, 'titleEn');
        });
    };
    HomeComponent.prototype.findOnlyMine = function () {
        var _this = this;
        this.homeService.findOnlyMine().then(function (result) { return _this.translations = result; });
    };
    HomeComponent.prototype.getUser = function () {
        return this.mainAuthorizationService.getUser();
    };
    HomeComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.filled) {
            this.mainService.post('translations', {
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.getUser().email
            }).then(function (response) {
                _this.mainService.get('translations').then(function (response) {
                    _this.translations = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.unionBy(response, 'titleEn');
                });
            });
        }
    };
    HomeComponent.prototype.addPopup = function (content) {
        this.titleForm = 'Add Translation';
        this.popupsService.openPopup(content);
    };
    HomeComponent.prototype.checkAuthorization = function () {
        return this.mainAuthorizationService.checkAuthorization();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_2__["MainAuthorizationService"],
            _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_3__["PopupsService"],
            _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// for adding other services
var HomeService = /** @class */ (function () {
    function HomeService(mainService, mainAuthorizationService) {
        this.mainService = mainService;
        this.mainAuthorizationService = mainAuthorizationService;
        this.showMine = false;
    }
    HomeService.prototype.findOnlyMine = function () {
        !this.showMine ? this.showMine = true : this.showMine = false;
        var cacheTranslations = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.unionBy(this.mainService.cacheData.translations, 'titleEn');
        var findResult = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(cacheTranslations, this.showMine ? {
            'creator_email': this.mainAuthorizationService.getUser().email
        } : {});
        return Promise.resolve(findResult);
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_main_service_main_http_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _shared_main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_3__["MainAuthorizationService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <br/><p class=\"text-center\"><strong>This is not the page you were looking for!</strong></p>\n    "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/forms.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/forms/forms.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <form class=\"form\" (ngSubmit)=\"onSubmit(); control.reset()\" #control=\"ngForm\">\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n      <button *ngIf=\"type === 'popup'\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <div class=\"form-group\" *ngFor=\"let field of dataForm; let i = index;\">\n\n        <input *ngIf=\"field.type === 'checkbox'\" [name]=\"field.name\" type=\"checkbox\" class=\"form-control d-inline-block mr-1\" [(ngModel)]=\"field.text\"/>\n\n        <label *ngIf=\"field.label\" [ngClass]=\"{'d-inline-block' : field.type === 'checkbox'}\">{{field.placeholder}}</label>\n\n        <input *ngIf=\"field.type === 'text'\" [name]=\"field.name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"field.text\" [placeholder]=\"field.placeholder\" [required]=\"field.required\" />\n\n        <input *ngIf=\"field.type === 'email'\" [name]=\"field.name\" email=\"true\" class=\"form-control\" type=\"email\" [(ngModel)]=\"field.text\" [placeholder]=\"field.placeholder\" [required]=\"field.required\" />\n\n        <input *ngIf=\"field.type === 'password'\" [name]=\"field.name\" class=\"form-control\" type=\"password\" [(ngModel)]=\"field.text\" [placeholder]=\"field.placeholder\" [required]=\"field.required\" />\n\n        <input *ngIf=\"field.type === 'confirmPassword'\" [name]=\"field.name\" class=\"form-control\" type=\"password\" [(ngModel)]=\"field.text\" [placeholder]=\"field.placeholder\" [required]=\"field.required\" />\n\n        <textarea *ngIf=\"field.type === 'textarea'\" [name]=\"field.name\" class=\"form-control\" [(ngModel)]=\"field.text\" [placeholder]=\"field.placeholder\" [required]=\"field.required\"></textarea>\n\n      </div>\n\n      <div *ngIf=\"buttons\">\n        <button *ngFor=\"let btn of buttons;\" type=\"button\" class=\"btn btn-outline-dark\" (click)=\"btn.handler(close)\"><fa name=\"{{btn.type}}\" size=\"lg\"></fa> {{btn.text}}</button>\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button *ngIf=\"type === 'popup'\" type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close('Close click')\">Close</button>\n      <button [disabled]=\"validationCustom(control)\" class=\"btn btn-primary\" type=\"submit\">Send</button>\n    </div>\n\n  </form>\n "

/***/ }),

/***/ "./src/app/shared/forms/forms.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/forms/forms.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form input[type=\"checkbox\"] {\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/shared/forms/forms.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/forms/forms.component.ts ***!
  \*************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fields = {};
    }
    FormsComponent.prototype.ngOnInit = function () { };
    FormsComponent.prototype.validationCustom = function (control) {
        var result = true;
        this.fields.filled = true;
        for (var _i = 0, _a = this.dataForm; _i < _a.length; _i++) {
            var field = _a[_i];
            this.fields[field.name] = field.text;
        }
        if (this.fields.confirm_password) {
            if (this.fields.password === this.fields.confirm_password && control.form.valid) {
                result = false;
            }
        }
        else {
            result = !control.form.valid;
        }
        return result;
    };
    FormsComponent.prototype.onSubmit = function () {
        this.submit.emit(this.fields);
        if (this.type === 'popup') {
            this.close('Close click');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "dataForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormsComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "dismiss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormsComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "submit", void 0);
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/shared/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/shared/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <forms \n    [type]=\"'popup'\"\n    [close]=\"c\"\n    [dismiss]=\"d\"\n    [title]=\"titleForm\"\n    [dataForm]=\"fields\"\n    [buttons]=\"buttons\"\n    (submit)=\"onSubmit($event)\">\n  </forms>\n</ng-template>\n\n<header class=\"fixed-top\">\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">My English</a>\n    <button *ngIf=\"!checkAuthorization()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"openMobileNavbar()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div ngbDropdown class=\"d-inline-block ml-auto\" *ngIf=\"checkAuthorization()\">\n      <button class=\"btn btn-outline-secondary rounded-0\" ngbDropdownToggle>\n        <fa name=\"user\" size=\"lg\"></fa> Profile\n      </button>\n      <div class=\"rounded-0\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n        <button class=\"dropdown-item\">{{getUser().name}}</button>\n        <button class=\"dropdown-item\"><fa name=\"at\" size=\"lg\"></fa> {{getUser().email}}</button>\n        <button class=\"dropdown-item\" (click)=\"logout()\"><fa name=\"sign-out\" size=\"lg\"></fa> logout</button>\n      </div>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\" [ngClass]=\"{'show': showMobileNavbar}\" *ngIf=\"!checkAuthorization()\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [href]=\"\" (click)=\"login(content)\"><fa name=\"sign-in\" size=\"lg\"></fa> Log In</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!checkAuthorization()\">\n          <a class=\"nav-link\" [href]=\"\" (click)=\"registration(content)\"><fa name=\"registered\" size=\"lg\"></fa> Ragister</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav a {\n  cursor: pointer; }\n\n.navbar [ngbDropdownMenu] {\n  left: auto !important;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-service/main.http.service */ "./src/app/shared/main-service/main.http.service.ts");
/* harmony import */ var _shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/popups/popups.service */ "./src/app/shared/popups/popups.service.ts");
/* harmony import */ var _main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-service/main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(popupsService, mainService, mainAuthorizationService) {
        this.popupsService = popupsService;
        this.mainService = mainService;
        this.mainAuthorizationService = mainAuthorizationService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.openMobileNavbar = function () {
        this.showMobileNavbar = this.showMobileNavbar ? this.showMobileNavbar = false : this.showMobileNavbar = true;
    };
    HeaderComponent.prototype.checkAuthorization = function () {
        return this.mainAuthorizationService.checkAuthorization();
    };
    HeaderComponent.prototype.getUser = function () {
        return this.mainAuthorizationService.getUser();
    };
    HeaderComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.filled) {
            if (this.checkControlPopup === 'login') {
                this.mainService.login('users/login', {
                    email: data.email,
                    password: data.password,
                    rememberMe: data.remember_me
                }).then(function (response) {
                    console.log('logged!');
                });
            }
            if (this.checkControlPopup === 'registration') {
                this.mainService.post('users', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }).then(function (userResponse) {
                    _this.mainService.login('users/login', {
                        email: data.email,
                        password: data.password,
                        rememberMe: true
                    }).then(function (loginResponse) {
                        console.log('registred!');
                    });
                });
            }
        }
    };
    HeaderComponent.prototype.login = function (content) {
        var _this = this;
        this.checkControlPopup = 'login';
        this.titleForm = 'Log In';
        this.fields = [
            {
                type: 'text',
                name: 'email',
                placeholder: 'email',
                text: '',
                required: true
            },
            {
                type: 'text',
                name: 'password',
                placeholder: 'password',
                text: '',
                required: true
            },
            {
                type: 'checkbox',
                name: 'remember_me',
                placeholder: 'remember me',
                required: false,
                text: false,
                label: true
            }
        ];
        this.buttons = [
            {
                type: 'facebook',
                text: 'Connect',
                handler: function (close) {
                    _this.mainAuthorizationService.socialSignIn('facebook')
                        .then(function (dataUser) {
                        dataUser['rememberMe'] = true;
                        _this.mainService.login('users/login', dataUser)
                            .then(function (response) {
                            console.log('logged!');
                            close('Close click');
                        });
                    });
                }
            }
        ];
        this.popupsService.openPopup(content);
    };
    HeaderComponent.prototype.logout = function () {
        this.mainService.logout();
    };
    HeaderComponent.prototype.registration = function (content) {
        this.checkControlPopup = 'registration';
        this.titleForm = 'Registration';
        this.fields = [
            {
                type: 'text',
                name: 'name',
                placeholder: 'name',
                text: '',
                required: true
            },
            {
                type: 'email',
                name: 'email',
                placeholder: 'email',
                text: '',
                required: true
            },
            {
                type: 'password',
                name: 'password',
                placeholder: 'password',
                text: '',
                required: true
            },
            {
                type: 'confirmPassword',
                name: 'confirm_password',
                placeholder: 'confirm password',
                text: '',
                required: true
            }
        ];
        this.popupsService.openPopup(content);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-top',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_popups_popups_service__WEBPACK_IMPORTED_MODULE_2__["PopupsService"],
            _main_service_main_http_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            _main_service_main_authorization_service__WEBPACK_IMPORTED_MODULE_3__["MainAuthorizationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/main-service/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/main-service/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.localStorageService.get('Authorization');
        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', token) });
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/main-service/main.authorization.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/main-service/main.authorization.service.ts ***!
  \*******************************************************************/
/*! exports provided: MainAuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAuthorizationService", function() { return MainAuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MainService } from './main.http.service';
// for adding other services 
var MainAuthorizationService = /** @class */ (function () {
    function MainAuthorizationService(localStorageService, socialAuthService) {
        this.localStorageService = localStorageService;
        this.socialAuthService = socialAuthService;
        this.firstOnlyLocalStorage = {
            Authorization: false,
            user: false
        };
        this.clearUserMyself = function () {
            this.firstOnlyLocalStorage.user = false;
            this.localStorageService.remove('user');
        };
        this.setUserMyself = function (user) {
            delete user.password;
            this.localStorageService.set('user', user);
            this.firstOnlyLocalStorage.user = user;
        };
    }
    MainAuthorizationService.prototype.checkRememberMe = function (rememberMe) {
        this.localStorageService.set('checkRememberMe', rememberMe);
    };
    MainAuthorizationService.prototype.checkAuthorization = function () {
        var checkRememberMe = (!this.localStorageService.get('checkRememberMe'));
        var authFirstOnly = this.firstOnlyLocalStorage.Authorization;
        var auth = this.localStorageService.get('Authorization');
        var checkLocalStorage = checkRememberMe ? authFirstOnly : auth;
        return checkLocalStorage ? true : false;
    };
    MainAuthorizationService.prototype.addAuthHeaderForAPI = function (token) {
        this.localStorageService.set('Authorization', 'Bearer ' + token);
        this.firstOnlyLocalStorage.Authorization = 'Bearer ' + token;
    };
    ;
    MainAuthorizationService.prototype.clearAuthHeaderForAPI = function () {
        this.localStorageService.remove('Authorization');
        this.firstOnlyLocalStorage.Authorization = false;
    };
    ;
    MainAuthorizationService.prototype.setToken = function (token) {
        if (!token) {
            return;
        }
        this.localStorageService.set('Authorization', token);
        this.firstOnlyLocalStorage.Authorization = token;
    };
    ;
    MainAuthorizationService.prototype.getUser = function () {
        return !this.localStorageService.get('checkRememberMe') ? this.firstOnlyLocalStorage.user : this.localStorageService.get('user');
    };
    ;
    MainAuthorizationService.prototype.timeSession = function () {
        var currentDate = new Date();
        var currentTime = currentDate.setDate(currentDate.getDate());
        var _this = this;
        return {
            // "n: number" is amount of days
            startSession: function (n) {
                var nextDayTime = currentDate.setDate(currentDate.getDate() + n);
                _this.localStorageService.set('NextDayTime', nextDayTime + '');
            },
            cleanSession: function () {
                if (_this.localStorageService.get('NextDayTime')) {
                    if (currentTime > parseInt(_this.localStorageService.get('NextDayTime'))) {
                        console.log(_this.localStorageService.get('NextDayTime'));
                        _this.clearUserMyself();
                        _this.setToken(false);
                        _this.clearAuthHeaderForAPI();
                    }
                }
            }
        };
    };
    MainAuthorizationService.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        return new Promise(function (resolve) {
            _this.socialAuthService.signIn(socialPlatformProvider)
                .then(function (userData) {
                resolve(userData);
            });
        });
    };
    MainAuthorizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainAuthorizationService);
    return MainAuthorizationService;
}());



/***/ }),

/***/ "./src/app/shared/main-service/main.http.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/main-service/main.http.service.ts ***!
  \**********************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _main_authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.authorization.service */ "./src/app/shared/main-service/main.authorization.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// for adding other services 
var MainService = /** @class */ (function () {
    function MainService(httpClient, mainAuthService) {
        this.httpClient = httpClient;
        this.mainAuthService = mainAuthService;
        this.cacheData = {};
        this.cacheDataFirstOnly = false;
        this.activateLoader = false;
    }
    MainService.prototype.get = function (nameRequest) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.cacheData[nameRequest]) {
                _this.mainRequest('get', [_this.mainUrl() + nameRequest]).then(function (response) {
                    _this.cacheData[nameRequest] = response;
                    resolve(response);
                });
            }
            else {
                resolve(_this.cacheData[nameRequest]);
            }
        });
    };
    MainService.prototype.post = function (nameRequest, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.mainRequest('post', [_this.mainUrl() + nameRequest, data]).then(function (response) {
                if (_this.cacheData[nameRequest]) {
                    _this.cacheData[nameRequest].push(response);
                }
                else {
                    _this.cacheData[nameRequest] = [response];
                }
                resolve(response);
            });
        });
    };
    MainService.prototype.update = function (nameRequest, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.mainRequest('put', [_this.mainUrl() + nameRequest, data]).then(function (response) {
                _this.cacheData[nameRequest][_this.cacheIndex(nameRequest, { _id: response._id })] = response;
                resolve(response);
            });
        });
    };
    MainService.prototype.login = function (nameRequest, data) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.cacheDataFirstOnly) {
                _this.cacheData = _this.cacheDataFirstOnly;
            }
            _this.mainAuthService.checkRememberMe(data.rememberMe);
            delete data.rememberMe;
            _this.mainRequest('post', [_this.mainUrl() + nameRequest, data]).then(function (response) {
                _this.mainAuthService.setToken(response.token);
                _this.mainAuthService.addAuthHeaderForAPI(response.token);
                _this.mainAuthService.setUserMyself(response.user);
                _this.mainAuthService.timeSession().startSession(1); // 1 session day
                resolve(response);
            });
        });
    };
    MainService.prototype.logout = function () {
        this.cacheDataFirstOnly = this.cacheData;
        this.cacheData = {};
        this.mainAuthService.clearUserMyself();
        this.mainAuthService.setToken(false);
        this.mainAuthService.clearAuthHeaderForAPI();
    };
    MainService.prototype.deleteById = function (nameRequest, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.mainRequest('delete', [_this.mainUrl() + nameRequest + '/' + id]).then(function (response) {
                _this.cacheData[nameRequest].splice(_this.cacheIndex(nameRequest, { _id: id }), 1);
                resolve(response);
            });
        });
    };
    MainService.prototype.getById = function (nameRequest, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.get(nameRequest).then(function (response) { return resolve(_this.findByValue(id, '_id', response)); });
        });
    };
    MainService.prototype.getByEmail = function (nameRequest, email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.get(nameRequest).then(function (response) { return resolve(_this.findByValue(email, 'creator_email', response)); });
        });
    };
    MainService.prototype.findByValue = function (value, prop, collection) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(collection, JSON.parse('{"' + prop + '":"' + value + '"}'));
    };
    MainService.prototype.mainRequest = function (typeRequest, options) {
        var _this = this;
        var httpClientOptions = {
            observe: 'body',
            responseType: 'json'
        };
        var checkType = (options.length > 1)
            ? this.httpClient[typeRequest](options[0], options[1], httpClientOptions)
            : this.httpClient[typeRequest](options[0], httpClientOptions);
        return new Promise(function (resolve) {
            _this.activateLoader = true;
            checkType.catch(function (error) {
                _this.activateLoader = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }).subscribe(function (response) {
                _this.activateLoader = false;
                resolve(response);
            });
        });
    };
    MainService.prototype.cacheIndex = function (name, data) {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.findIndex(this.cacheData[name], data);
    };
    MainService.prototype.mainUrl = function () {
        return _config__WEBPACK_IMPORTED_MODULE_7__["config"].API_URL + '/';
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _main_authorization_service__WEBPACK_IMPORTED_MODULE_6__["MainAuthorizationService"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<nav>\n  <ul class=\"pagination\" *ngIf=\"items !== 'undefined'\">\n    <li class=\"first\">\n      <a>First </a>\n    </li>\n    <li class=\"previous\">\n      <a> Previous </a>\n    </li>\n    <li class=\"pointer\">\n      <a> 1 </a>\n      \n    </li>\n    <li class=\"next\">\n      <a> Next </a>\n    </li>\n    <li class=\"last\">\n      <a> Last</a>\n    </li>\n  </ul>\n</nav> -->"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.service */ "./src/app/shared/pagination/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "items", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/shared/pagination/pagination.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.service.ts ***!
  \*********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/shared/popups/popups.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/popups/popups.service.ts ***!
  \*************************************************/
/*! exports provided: PopupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsService", function() { return PopupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// for adding other services 
var PopupsService = /** @class */ (function () {
    function PopupsService(modalService) {
        this.modalService = modalService;
    }
    PopupsService.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PopupsService.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PopupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PopupsService);
    return PopupsService;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    API_URL: 'http://localhost:8000/api'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleg/Documents/projects/front-end/angular/angular6-app-my-english/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map