var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-validatejs'], function (require, exports, aurelia_framework_1, aurelia_validatejs_1) {
    "use strict";
    var App = (function () {
        function App() {
            var _this = this;
            this.errors = [];
            this.firstName = '';
            this.reporter = aurelia_validatejs_1.ValidationEngine.getValidationReporter(this);
            this.subscriber = this.reporter.subscribe(function (result) {
                _this.renderErrors(result);
            });
        }
        App.prototype.detached = function () {
            this.subscriber.dispose();
        };
        App.prototype.submit = function () {
            if (!this.hasErrors()) {
                alert('Submitted successfully');
            }
            else {
                alert('Form has errors');
            }
        };
        App.prototype.hasErrors = function () {
            return !!this.errors.length;
        };
        App.prototype.renderErrors = function (result) {
            var _this = this;
            this.errors.splice(0, this.errors.length);
            result.forEach(function (error) {
                _this.errors.push(error);
            });
        };
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], App.prototype, "firstName", void 0);
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    }());
    exports.App = App;
});
