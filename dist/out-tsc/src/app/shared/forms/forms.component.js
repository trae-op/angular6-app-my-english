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
var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.submit = new core_1.EventEmitter();
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
        if (this.fields.confirm_password && this.fields.password === this.fields.confirm_password && control.form.valid) {
            result = false;
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "dataForm", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FormsComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "close", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "dismiss", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FormsComponent.prototype, "type", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "submit", void 0);
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'forms',
            templateUrl: './forms.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map