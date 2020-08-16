(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");





// import { LoginComponent } from '../../pages/login/login.component';



var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthLayoutModule });
    AuthLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthLayoutModule_Factory(t) { return new (t || AuthLayoutModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                // NgbModule
            ]] });
    return AuthLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthLayoutModule, { declarations: [_pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        // NgbModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    // NgbModule
                ],
                declarations: [
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");


var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] }
];


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 71, vars: 0, consts: [[1, "header", "bg-gradient-danger", "py-7", "py-lg-8"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-lg-5", "col-md-6"], [1, "text-white"], [1, "text-lead", "text-light"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-default"], [1, "container", "mt--8", "pb-5"], [1, "col-lg-6", "col-md-8"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-header", "bg-transparent", "pb-5"], [1, "text-muted", "text-center", "mt-2", "mb-4"], [1, "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon", "mr-4"], [1, "btn-inner--icon"], ["src", "assets/img/icons/common/github.svg"], [1, "btn-inner--text"], ["href", "javascript:void(0)", 1, "btn", "btn-neutral", "btn-icon"], ["src", "assets/img/icons/common/google.svg"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["role", "form"], [1, "form-group"], [1, "input-group", "input-group-alternative", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-hat-3"], ["placeholder", "Name", "type", "text", 1, "form-control"], [1, "ni", "ni-email-83"], ["placeholder", "Email", "type", "email", 1, "form-control"], [1, "input-group", "input-group-alternative"], [1, "ni", "ni-lock-circle-open"], ["placeholder", "Password", "type", "password", 1, "form-control"], [1, "text-muted", "font-italic"], [1, "text-success", "font-weight-700"], [1, "row", "my-4"], [1, "col-12"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", "customCheckRegister", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheckRegister", 1, "custom-control-label"], [1, "text-muted"], ["href", "#!"], ["type", "button", 1, "btn", "btn-primary", "mt-4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Use these awesome forms to login or create new account in your project for free.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "polygon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign up with");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Github");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Google");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Or sign up with credentials");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "password strength: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "I agree with the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Create account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map