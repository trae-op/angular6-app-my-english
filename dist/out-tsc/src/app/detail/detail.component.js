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
//import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
var main_service_1 = require("../shared/main.service");
var popups_service_1 = require("../shared/popups/popups.service");
var pagination_service_1 = require("../shared/pagination/pagination.service");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, mainService, popupsService, paginationService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.popupsService = popupsService;
        this.paginationService = paginationService;
        this.title = this.route.snapshot.params.titleEn;
        this.pageNumber = Number(this.route.snapshot.params.pageNumber);
        this.page = 4;
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
        this.mainService.get('translations', function (response) {
            var findByValue = _this.mainService.findByValue(_this.title, 'titleEn', response);
            var paginationGroup = _this.paginationService.group(findByValue, 3);
            _this.pagination = paginationGroup;
            _this.items = paginationGroup[_this.pageNumber - 1];
        });
    };
    DetailComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.filled) {
            this.mainService[this.checkControlPopup]('translations', {
                _id: this.idTranslation,
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.items[0].creator_email
            }, function (response) {
                if (_this.checkControlPopup === 'post') {
                    _this.items.push(response);
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
        //console.log(this.router);
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
        this.mainService.deleteById('translations', id, function (response) { return _this.items.splice(index, 1); });
    };
    DetailComponent = __decorate([
        core_1.Component({
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            main_service_1.MainService,
            popups_service_1.PopupsService,
            pagination_service_1.PaginationService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map