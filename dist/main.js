(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'argon-dashboard-angular';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".button[_ngcontent-%COMP%] {\n  background-color: darkslateblue;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  width: 10%;\n  margin: 5px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RudC9EZXNrdG9wL1NWVS9iYXNlL3N2dS1jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLCtCQUFBO0VBQWtDLGtCQUFBO0VBQXFCLFlBQUE7RUFBZSxZQUFBO0VBQWUsVUFBQTtFQUFhLFdBQUE7RUFBYyxxQkFBQTtFQUF3QixlQUFBO0FDU25KIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7ICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlOyAgYm9yZGVyLXJhZGl1czogNXB4OyAgY29sb3I6IHdoaXRlOyAgcGFkZGluZzogNXB4OyAgd2lkdGg6IDEwJTsgIG1hcmdpbjogNXB4OyAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgY3Vyc29yOiBwb2ludGVyO31cbiIsIi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_add_case_add_case_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/add-case/add-case.component */ "./src/app/pages/add-case/add-case.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _pages_add_enquiry_add_enquiry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/add-enquiry/add-enquiry.component */ "./src/app/pages/add-enquiry/add-enquiry.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");














 // <-- import the module



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
        _pages_add_case_add_case_component__WEBPACK_IMPORTED_MODULE_11__["AddCaseComponent"],
        _pages_add_enquiry_add_enquiry_component__WEBPACK_IMPORTED_MODULE_14__["AddEnquiryComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
                    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
                    _pages_add_case_add_case_component__WEBPACK_IMPORTED_MODULE_11__["AddCaseComponent"],
                    _pages_add_enquiry_add_enquiry_component__WEBPACK_IMPORTED_MODULE_14__["AddEnquiryComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'tables',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'tables'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                        useHash: true
                    })
                ],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]] });
    return ComponentsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                declarations: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
                ],
                exports: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");








function NavbarComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.location = location;
        console.log('hey ', this.loggedInUser);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.name = this.loggedInUser && this.loggedInUser.name;
        console.log('Here ', name);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem("user");
        this.router.navigate(['login']);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { loggedInUser: "loggedInUser" }, decls: 17, vars: 3, consts: [["id", "navbar-main", 1, "navbar", "navbar-top", "navbar-expand-md", "navbar-dark"], [1, "container-fluid"], [1, "navbar-nav", "align-items-center", "d-none", "d-md-flex"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["role", "button", "ngbDropdownToggle", "", 1, "nav-link", "pr-0"], [1, "media", "align-items-center"], [1, "media-body", "ml-2", "d-none", "d-lg-block"], [1, "mb-0", "text-sm", "font-weight-bold", 2, "cursor", "pointer", "font-weight", "bold"], ["ngbDropdownMenu", "", 1, "dropdown-menu-arrow", "dropdown-menu-right"], [1, "dropdown-header", "noti-title"], [1, "text-overflow", "m-0"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "ni", "ni-user-run"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 4, 0, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_a_16_Template, 4, 0, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInUser === null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInUser !== null);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { loggedInUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






var _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", menuItem_r1.class, " nav-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ni ", menuItem_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
} }
var _c1 = function () { return ["/dashboard"]; };
var ROUTES = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'cases', icon: 'ni-bullet-list-67 text-red', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (this.loggedInUser && this.loggedInUser.role === 'super-admin') {
            ROUTES = [
                { path: '/tables', title: 'cases', icon: 'ni-bullet-list-67 text-red', class: '' },
                { path: '/user', title: 'Manage User', icon: 'ni ni-circle-08 text-red', class: '' },
            ];
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 31, vars: 6, consts: [["id", "sidenav-main", 1, "navbar", "navbar-vertical", "navbar-expand-md", "navbar-light", "bg-white"], [1, "container-fluid"], ["type", "button", "aria-controls", "sidenav-collapse-main", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["routerLinkActive", "active", 3, "routerLink"], ["src", "./assets/img/brand/red.png", "alt", "...", 1, "brand-style"], [2, "font-size", "15px"], ["id", "sidenav-collapse-main", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-collapse-header", "d-md-none"], [1, "row"], [1, "col-6", "collapse-brand"], ["src", "./assets/img/brand/blue.png"], [1, "col-6", "collapse-close"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "mt-4", "mb-3", "d-md-none"], [1, "input-group", "input-group-rounded", "input-group-merge"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-rounded", "form-control-prepended"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-search"], [1, "navbar-nav"], [3, "class", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_2_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Special Vigilance Unit,");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "5, Darojga Prasad Rai Path, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Patna");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_20_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SidebarComponent_li_30_Template, 4, 10, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".brand-style[_ngcontent-%COMP%] {\n  height: 229px;\n  margin-left: -38px;\n  width: 249px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RudC9EZXNrdG9wL1NWVS9iYXNlL3N2dS1jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1zdHlsZSB7XG4gICAgaGVpZ2h0OiAyMjlweDtcbiAgICBtYXJnaW4tbGVmdDogLTM4cHg7XG4gICAgd2lkdGg6IDI0OXB4O1xufSIsIi5icmFuZC1zdHlsZSB7XG4gIGhlaWdodDogMjI5cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzhweDtcbiAgd2lkdGg6IDI0OXB4O1xufSJdfQ== */"] });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        console.log('loading admin');
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('from admin', this.user);
    };
    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(); };
    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 6, vars: 1, consts: [[1, "main-content"], [3, "loggedInUser"], [1, "container-fluid"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedInUser", ctx.user);
        } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AdminLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.component.html',
                styleUrls: ['./admin-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");





var _c0 = function () { return ["/dashboard"]; };
var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 28, vars: 5, consts: [[1, "main-content"], [1, "navbar", "navbar-top", "navbar-horizontal", "navbar-expand-md", "navbar-dark"], [1, "container", "px-4"], ["routerLinkActive", "active", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "aria-controls", "sidenav-collapse-main", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "sidenav-collapse-main", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-collapse-header", "d-md-none"], [1, "row"], [1, "col-6", "collapse-brand"], ["routerLinkActive", "active", 3, "routerLink"], ["src", "assets/img/brand/blue.png"], [1, "col-6", "collapse-close"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "py-5"], [1, "container"], [1, "row", "align-items-center", "justify-content-xl-between"], [1, "col-xl-6"], [1, "copyright", "text-center", "text-xl-left", "text-muted"], [1, "nav", "nav-footer", "justify-content-center", "justify-content-xl-end"], [1, "nav-item"], ["href", "https://goo.gl/maps/MA5689AYGfNWGxXX8", "target", "_blank", 1, "nav-link"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthLayoutComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthLayoutComponent_Template_button_click_13_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Office Of Inspector General Of Police SVU, Patna ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Location");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AuthLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/add-case/add-case.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/add-case/add-case.component.ts ***!
  \******************************************************/
/*! exports provided: AddCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCaseComponent", function() { return AddCaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");














function AddCaseComponent_label_52_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCaseComponent_label_52_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.previewFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preview Previous File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddCaseComponent = /** @class */ (function () {
    function AddCaseComponent(router, fb, toastr, http, activateRoute, location) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.activateRoute = activateRoute;
        this.location = location;
        this.caseNo = "";
        this.btnLabel = "Submit";
        this.activateRoute.params.subscribe(function (caseno) {
            _this.caseNo = caseno.caseNo || '';
        });
        this.userLoggedIN = JSON.parse(localStorage.getItem('user'));
        this.userName = this.userLoggedIN && this.userLoggedIN.userName;
        this.notification_id = this.userLoggedIN && this.userLoggedIN.notification_ids || '';
    }
    AddCaseComponent.prototype.getCase = function () {
        var _this = this;
        this.http.get("https://svu-client.herokuapp.com/api/svu/v1/getcasebyid?caseNo=" + this.caseNo).subscribe(function (res) {
            var caseDate = res['data'].date;
            var caseData = res && res['data'];
            var dateObj = {
                year: new Date(caseDate).getFullYear(),
                month: new Date(caseDate).getMonth(),
                day: new Date(caseDate).getDate()
            };
            _this.caseForm.get('date').patchValue(dateObj);
            _this.caseForm.get('caseNo').patchValue(caseData && caseData.caseNo);
            _this.caseForm.get('underSection').patchValue(caseData && caseData.underSection);
            _this.caseForm.get('nameOfAccuse').patchValue(caseData && caseData.nameOfAccuse);
            _this.caseForm.get('createdBy').patchValue(caseData && caseData.createdBy);
            // this.caseForm.get('InvStatus').patchValue(caseData && caseData.InvStatus)
            _this.caseForm.get('prosSanctionStatus').patchValue(caseData && caseData.prosSanctionStatus);
            _this.caseForm.get('trialStatus').patchValue(caseData && caseData.trialStatus);
            _this.caseForm.get('chartSheetDate').patchValue(caseData && caseData.chartSheetDate);
            _this.caseForm.get('depProceeding').patchValue(caseData && caseData.depProceeding);
            if (caseData && caseData.notification_id) {
                _this.caseForm.get('notification_id').patchValue(caseData && caseData.notification_id);
            }
            _this.caseForm.get('depProceeding').patchValue(caseData && caseData.depProceeding);
            _this.caseForm.get('reviewComment').patchValue(caseData && caseData.reviewComment);
            _this.caseForm.get('confiscationStatus').patchValue(caseData && caseData.confiscationStatus);
            _this.caseForm.get('invOfficer').patchValue(caseData && caseData.invOfficer);
            if (!_this.isSuperAdmin) {
                _this.caseForm.get('reviewComment').disable();
            }
            _this.btnLabel = "Update";
            if (_this.caseNo !== '') {
                if (_this.userLoggedIN && _this.userLoggedIN.role)
                    if (_this.userLoggedIN && _this.userLoggedIN.role === 'super-admin' || _this.userLoggedIN && _this.userLoggedIN.role === 'admin') {
                        if (_this.userName !== _this.caseForm.get('createdBy').value) {
                            _this.caseForm.get('InvStatus').setValidators([]);
                            _this.isSuperAdmin = true;
                            _this.caseForm.get('InvStatus').updateValueAndValidity();
                            _this.caseForm.disable();
                            _this.caseForm.get('reviewComment').enable();
                        }
                    }
            }
        });
    };
    AddCaseComponent.prototype.ngOnInit = function () {
        this.caseForm = this.fb.group({
            file: [''],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            caseNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            underSection: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nameOfAccuse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            InvStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            prosSanctionStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trialStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confiscationStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            chartSheetDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            depProceeding: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            invOfficer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: ['pending', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            createdBy: [''],
            reviewComment: [''],
            notification_id: [this.notification_id]
        });
        if (this.caseNo !== '') {
            this.getCase();
        }
        if (this.userLoggedIN && this.userLoggedIN.role === 'general') {
            this.caseForm.get('reviewComment').disable();
        }
    };
    AddCaseComponent.prototype.submit = function () {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: 'You Want To Submit Case',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (_this.isSuperAdmin) {
                    // addcomment
                    if (_this.caseNo !== '') {
                        var commentCache = _this.caseForm.get('reviewComment').value;
                        var id = _this.caseForm.get('notification_id').value;
                        var createdBy = _this.caseForm.get('createdBy').value;
                        var toSendComment = commentCache + " (Review by " + (_this.userLoggedIN && _this.userLoggedIN.name) + ")";
                        _this.http.get("https://svu-client.herokuapp.com/api/svu/v1/addcomment?caseNo=" + _this.caseNo + "&reviewComment=" + toSendComment + "&id=" + id + "&created_by=" + createdBy).subscribe(function (res) {
                            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Case Added!', 'Case Has Been Successfully Added', 'success');
                            _this.router.navigate(['tables']);
                        });
                    }
                    else {
                        var getDate = _this.caseForm.get('date').value;
                        var month = getDate.month;
                        var year = getDate.year;
                        var day = getDate.day;
                        var isoDate = month.toString() + "/" + day.toString() + "/" + year.toString();
                        _this.caseForm.get('date').setValue(new Date(isoDate).toISOString());
                        _this.caseForm.get('createdBy').setValue(_this.userName);
                        // this.caseService.addCase(this.caseForm.getRawValue()).subscribe(res => {
                        //   this.router.navigate(['tables'])
                        // })
                        if (_this.caseNo !== "") {
                            return _this.http.put("https://svu-client.herokuapp.com/api/svu/v1/updateCase?caseNo=" + _this.caseNo, _this.caseForm.getRawValue()).subscribe(function (res) {
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Case Updated!', 'Case Has Been Successfully Updated', 'success');
                                _this.router.navigate(['tables']);
                            });
                        }
                        else {
                            return _this.http.post('https://svu-client.herokuapp.com/api/svu/v1/addcase', _this.caseForm.getRawValue()).subscribe(function (res) {
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Case Added!', 'Case Has Been Successfully Added', 'success');
                                _this.router.navigate(['tables']);
                            });
                        }
                    }
                }
                else {
                    var getDate = _this.caseForm.get('date').value;
                    var month = getDate.month;
                    var year = getDate.year;
                    var day = getDate.day;
                    var isoDate = month.toString() + "/" + day.toString() + "/" + year.toString();
                    _this.caseForm.get('date').setValue(new Date(isoDate).toISOString());
                    _this.caseForm.get('createdBy').setValue(_this.userName);
                    // this.caseService.addCase(this.caseForm.getRawValue()).subscribe(res => {
                    //   this.router.navigate(['tables'])
                    // })
                    if (_this.caseNo !== "") {
                        return _this.http.put("https://svu-client.herokuapp.com/api/svu/v1/updateCase?caseNo=" + _this.caseNo, _this.caseForm.getRawValue()).subscribe(function (res) {
                            _this.router.navigate(['tables']);
                            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Case Updated!', 'Case Has Been Successfully Updated', 'success');
                        });
                    }
                    else {
                        return _this.http.post('https://svu-client.herokuapp.com/api/svu/v1/addcase', _this.caseForm.getRawValue()).subscribe(function (res) {
                            _this.router.navigate(['tables']);
                            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Case Added!', 'Case Has Been Successfully Added', 'success');
                        });
                    }
                }
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
        });
    };
    AddCaseComponent.prototype._createFormDataV2 = function (data) {
        var formData = new FormData();
        if (data && data instanceof Object) {
            for (var key in data) {
                formData.append(key, data[key]);
            }
        }
        return formData;
    };
    AddCaseComponent.prototype.uploadToServerV4 = function (file, types, size) {
        var contentType = file.type;
        var formData = this._createFormDataV2({
            file: file,
            types: types,
            size: size,
            contentType: contentType,
            path: 'Candidate'
        });
        console.log(formData);
        // const URL = `${environment.documentServiceUrl}/api/document/v3`;
        // const URL = `${environment.documentServiceUrl}/api/document/v1`;
    };
    AddCaseComponent.prototype.studentBulkUpload = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post("https://svu-client.herokuapp.com/api/svu/v1/saveFiles?caseNo=" + this.caseForm.get('caseNo').value, formData);
    };
    AddCaseComponent.prototype.upload = function () {
    };
    AddCaseComponent.prototype.onFileUpload = function (event) {
        if (this.caseForm.get('caseNo').value === '') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Alert',
                text: 'Please enter case number before uploading file!',
            });
            this.caseForm.get('file').patchValue('');
            this.caseForm.get('InvStatus').patchValue('');
        }
        else {
            this.caseForm.get('file').patchValue(event.target.files[0]);
            this.studentBulkUpload(this.caseForm.get('file').value).subscribe(function (res) {
                console.log(res);
            });
        }
    };
    AddCaseComponent.prototype.previewFile = function () {
        this.http.get("https://svu-client.herokuapp.com/api/svu/v1/downloadFile?caseNo=" + this.caseNo).subscribe(function (res) {
            var file = res && res['data'] && res['data']['fileName'];
            window.open(file, 'blank');
        });
    };
    AddCaseComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddCaseComponent.ɵfac = function AddCaseComponent_Factory(t) { return new (t || AddCaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
    AddCaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCaseComponent, selectors: [["app-add-case"]], decls: 97, vars: 4, consts: [[1, "header", "pb-8", "pt-5", "pt-lg-8", "d-flex", "align-items-center", 2, "min-height", "328px", "background-size", "cover", "background-position", "center top"], [1, "mask", "bg-gradient-danger", "opacity-8"], [1, "container-fluid", "d-flex", "align-items-center"], [1, "row"], [1, "col-md-8", "col-md-12"], [1, "display-3", "text-white"], [1, "text-white", "mt-0", "mb-5"], [1, "container-fluid", "mt--7"], [1, "col-xl-12", "order-xl-1"], [1, "card", "bg-secondary", "shadow"], [1, "card-header", "bg-white", "border-0"], [1, "row", "align-items-center"], [1, "col-12"], [1, "mb-0"], [1, "card-body"], [3, "formGroup"], [1, "pl-lg-4"], [1, "col-lg-4"], [1, "form-group"], ["for", "input-email", 1, "form-control-label"], ["type", "text", "id", "input-email", "formControlName", "caseNo", "placeholder", "Enter Case Number", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["for", "input-username", 1, "form-control-label"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-calendar-grid-58"], ["placeholder", "Select date", "name", "dp", "formControlName", "date", "ngbDatepicker", "", "type", "text", 1, "form-control", "datepicker", 2, "color", "black", "font-weight", "bold", 3, "click"], ["d", "ngbDatepicker"], ["type", "text", "id", "input-email", "formControlName", "underSection", "placeholder", "Enter Under Section", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], [1, "col-lg-6"], [1, "form-control-label"], ["type", "text", "id", "input-first-name", "formControlName", "nameOfAccuse", "placeholder", "Enter Name Of Accuse", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["for", "input-last-name", 1, "form-control-label"], ["type", "file", "id", "input-last-name", "formControlName", "InvStatus", "placeholder", "Investigation Statu", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold", 3, "change"], ["class", "form-control-label", "style", "color:blue;cursor: pointer;", 3, "click", 4, "ngIf"], ["type", "text", "id", "input-first-name", "formControlName", "prosSanctionStatus", "placeholder", "Prosecution Sanction Status", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "calendar", "id", "input-last-name", "formControlName", "chartSheetDate", "placeholder", "Date Of Chart Sheet", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "text", "id", "input-first-name", "formControlName", "trialStatus", "placeholder", "Trial Status", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "text", "id", "input-last-name", "formControlName", "confiscationStatus", "placeholder", "Enter Confiscation Status", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "text", "id", "input-first-name", "formControlName", "invOfficer", "placeholder", "Enter Office Name", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "text", "id", "input-last-name", "formControlName", "depProceeding", "placeholder", "Departmental Proceeding", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["type", "textarea", "id", "input-first-name", "formControlName", "reviewComment", "placeholder", "Review Comments", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], [1, "my-4"], [1, "btn", "btn-info", 3, "disabled", "click"], [1, "btn", "btn-info", 3, "click"], [1, "form-control-label", 2, "color", "blue", "cursor", "pointer", 3, "click"]], template: function AddCaseComponent_Template(rf, ctx) { if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Case");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Case");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Case Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCaseComponent_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r8.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Under Section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Name Of Accuse");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Investigation Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCaseComponent_Template_input_change_51_listener($event) { return ctx.onFileUpload($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddCaseComponent_label_52_Template, 2, 0, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Prosecution Sanction Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Charge Sheet No & Date ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Trial Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Confiscation Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Name Of Investigation Officer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Departmental Proceeding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Review Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "textarea", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCaseComponent_Template_button_click_93_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCaseComponent_Template_button_click_95_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "BACK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.caseForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.caseNo !== "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.caseForm.status === "INVALID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnLabel);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".mask[_ngcontent-%COMP%] {\n\n    height: 82%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n    min-height: 343px;\n    background-size: cover;\n    background-position: center top;\n}\n.mt--7[_ngcontent-%COMP%], .my--7[_ngcontent-%COMP%] {\n    margin-top: -10rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhc2UvYWRkLWNhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWNhc2UvYWRkLWNhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNrIHtcblxuICAgIGhlaWdodDogODIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDM0M3B4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbn1cblxuLm10LS03LCAubXktLTcge1xuICAgIG1hcmdpbi10b3A6IC0xMHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return AddCaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-case',
                templateUrl: './add-case.component.html',
                styleUrls: ['./add-case.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/add-enquiry/add-enquiry.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/add-enquiry/add-enquiry.component.ts ***!
  \************************************************************/
/*! exports provided: AddEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnquiryComponent", function() { return AddEnquiryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");












function AddEnquiryComponent_label_52_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEnquiryComponent_label_52_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.previewFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preview Previous File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddEnquiryComponent = /** @class */ (function () {
    function AddEnquiryComponent(fb, http, activateRoute, router, location) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.activateRoute = activateRoute;
        this.router = router;
        this.location = location;
        this.enqNo = "";
        this.btnLabel = "";
        this.activateRoute.params.subscribe(function (enquiryNo) {
            _this.enqNo = enquiryNo && enquiryNo.enqNo || '';
        });
        this.btnLabel = "Submit";
        if (this.enqNo !== '') {
            this.getEnquiry();
        }
        this.userLoggedIN = JSON.parse(localStorage.getItem('user'));
        this.notification_id = this.userLoggedIN && this.userLoggedIN.notification_ids || '';
        this.user = this.userLoggedIN && this.userLoggedIN.userName;
        console.log(this.user);
    }
    AddEnquiryComponent.prototype.ngOnInit = function () {
        this.enquiryForm = this.fb.group({
            enquiryNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            suspectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            enqOfficerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: ['pending'],
            createdBy: [this.user],
            reviewComment: [''],
            notification_id: [this.notification_id]
        });
        if (!this.isSuperAdmin) {
            this.enquiryForm.get('reviewComment').disable();
        }
    };
    AddEnquiryComponent.prototype.getEnquiry = function () {
        var _this = this;
        this.http.get("https://svu-client.herokuapp.com/api/svu/v1/getenqbyid?enqNo=" + this.enqNo).subscribe(function (res) {
            _this.data = res && res['data'];
            _this.enquiryForm.get('enquiryNo').patchValue(_this.data && _this.data.enquiryNo);
            var caseDate = res && res['data'] && res['data'].date;
            var dateObj = {
                year: new Date(caseDate).getFullYear(),
                month: new Date(caseDate).getMonth(),
                day: new Date(caseDate).getDate()
            };
            console.log(dateObj);
            _this.enquiryForm.get('date').patchValue(dateObj);
            _this.enquiryForm.get('createdBy').patchValue(_this.data && _this.data.createdBy);
            _this.enquiryForm.get('reviewComment').patchValue(_this.data && _this.data.reviewComment);
            if (_this.data && _this.data.notification_id) {
                _this.enquiryForm.get('notification_id').patchValue(_this.data && _this.data.notification_id);
            }
            _this.enquiryForm.get('suspectName').patchValue(_this.data && _this.data.suspectName);
            _this.enquiryForm.get('enqOfficerName').patchValue(_this.data && _this.data.enqOfficerName);
            _this.enquiryForm.get('status').patchValue(_this.data && _this.data.status);
            if (_this.enqNo !== '') {
                if (_this.userLoggedIN && _this.userLoggedIN.role)
                    if (_this.userLoggedIN && _this.userLoggedIN.role === 'super-admin' || _this.userLoggedIN && _this.userLoggedIN.role === 'admin') {
                        if (_this.user !== _this.enquiryForm.get('createdBy').value) {
                            _this.enquiryForm.get('file').setValidators([]);
                            _this.isSuperAdmin = true;
                            _this.enquiryForm.get('file').updateValueAndValidity();
                            _this.enquiryForm.disable();
                            _this.enquiryForm.get('reviewComment').enable();
                        }
                    }
            }
        });
    };
    AddEnquiryComponent.prototype.onFileUpload = function (event) {
        this.enquiryForm.get('file').patchValue(event.target.files[0]);
        this.studentBulkUpload(this.enquiryForm.get('file').value).subscribe(function (res) {
            console.log(res);
        });
    };
    AddEnquiryComponent.prototype.studentBulkUpload = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post("https://svu-client.herokuapp.com/api/svu/v1/saveFiles?caseNo=" + this.enquiryForm.get('enquiryNo').value, formData);
    };
    AddEnquiryComponent.prototype.submit = function () {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Are You sure, You Want To Dispose Case',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonColor: 'red',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                if (_this.userLoggedIN && _this.userLoggedIN.role === 'super-admin' || _this.userLoggedIN && _this.userLoggedIN.role === 'admin') {
                    if (_this.enqNo !== '') {
                        var commentCache = _this.enquiryForm.get('reviewComment').value;
                        var toSendComment = commentCache + " (Review by " + (_this.userLoggedIN && _this.userLoggedIN.name) + ")";
                        var createdBy = _this.enquiryForm.get('createdBy').value;
                        _this.http.get("https://svu-client.herokuapp.com/api/svu/v1/addenqcomment?enqNo=" + _this.enqNo + "&reviewComment=" + toSendComment + "&id=" + _this.enquiryForm.get('notification_id').value + "&created_by=" + createdBy).subscribe(function (res) {
                            _this.router.navigate(['tables']);
                            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Enquiry Updated!', 'Enquiry Has Been Successfully Updaed', 'success');
                        });
                    }
                    else {
                        var getDate = _this.enquiryForm.get('date').value;
                        var month = getDate.month;
                        var year = getDate.year;
                        var day = getDate.day;
                        var isoDate = month.toString() + "/" + day.toString() + "/" + year.toString();
                        _this.enquiryForm.get('date').setValue(new Date(isoDate).toISOString());
                        var payLoad = {
                            date: _this.enquiryForm.get('date').value,
                            enqOfficerName: _this.enquiryForm.get('enqOfficerName').value,
                            enquiryNo: _this.enquiryForm.get('enquiryNo').value,
                            status: _this.enquiryForm.get('status').value,
                            suspectName: _this.enquiryForm.get('suspectName').value,
                        };
                        if (_this.enqNo === "") {
                            return _this.http.post('https://svu-client.herokuapp.com/api/svu/v1/addEnquiry', _this.enquiryForm.getRawValue()).subscribe(function (res) {
                                _this.router.navigate(['tables']);
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Enquiry Added!', 'Enquiry Has Been Successfully Added', 'success');
                            });
                        }
                        else {
                            return _this.http.put("https://svu-client.herokuapp.com/api/svu/v1/updateEnquiry?enqNo=" + _this.enqNo, _this.enquiryForm.getRawValue()).subscribe(function (res) {
                                _this.router.navigate(['tables']);
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Enquiry Updated!', 'Enquiry Has Been Successfully Updated', 'success');
                            });
                        }
                    }
                }
                else {
                    var getDate = _this.enquiryForm.get('date').value;
                    var month = getDate.month;
                    var year = getDate.year;
                    var day = getDate.day;
                    var isoDate = month.toString() + "/" + day.toString() + "/" + year.toString();
                    _this.enquiryForm.get('date').setValue(new Date(isoDate).toISOString());
                    var payLoad = {
                        date: _this.enquiryForm.get('date').value,
                        enqOfficerName: _this.enquiryForm.get('enqOfficerName').value,
                        enquiryNo: _this.enquiryForm.get('enquiryNo').value,
                        status: _this.enquiryForm.get('status').value,
                        suspectName: _this.enquiryForm.get('suspectName').value,
                    };
                    if (_this.enqNo === "") {
                        return _this.http.post('https://svu-client.herokuapp.com/api/svu/v1/addEnquiry', _this.enquiryForm.getRawValue()).subscribe(function (res) {
                            _this.router.navigate(['tables']);
                        });
                    }
                    else {
                        return _this.http.put("https://svu-client.herokuapp.com/api/svu/v1/updateEnquiry?enqNo=" + _this.enqNo, _this.enquiryForm.getRawValue()).subscribe(function (res) {
                            _this.router.navigate(['tables']);
                        });
                    }
                }
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
        });
    };
    AddEnquiryComponent.prototype.previewFile = function () {
        this.http.get("https://svu-client.herokuapp.com/api/svu/v1/downloadFile?caseNo=" + this.enqNo).subscribe(function (res) {
            var file = res && res['data'] && res['data']['fileName'];
            window.open(file, 'blank');
        });
    };
    AddEnquiryComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddEnquiryComponent.ɵfac = function AddEnquiryComponent_Factory(t) { return new (t || AddEnquiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
    AddEnquiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEnquiryComponent, selectors: [["app-add-enquiry"]], decls: 63, vars: 4, consts: [[1, "header", "pb-8", "pt-5", "pt-lg-8", "d-flex", "align-items-center", 2, "min-height", "328px", "background-size", "cover", "background-position", "center top"], [1, "mask", "bg-gradient-danger", "opacity-8"], [1, "container-fluid", "d-flex", "align-items-center"], [1, "row"], [1, "col-md-8", "col-md-12"], [1, "display-3", "text-white"], [1, "text-white", "mt-0", "mb-5"], [1, "container-fluid", "mt--7"], [1, "col-xl-12", "order-xl-1"], [1, "card", "bg-secondary", "shadow"], [1, "card-header", "bg-white", "border-0"], [1, "row", "align-items-center"], [1, "col-12"], [1, "mb-0"], [1, "card-body"], [3, "formGroup"], [1, "pl-lg-4"], [1, "col-lg-4"], [1, "form-group"], ["for", "input-email", 1, "form-control-label"], ["type", "email", "id", "input-email", "formControlName", "enquiryNo", "placeholder", "Enter Case Number", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["for", "input-username", 1, "form-control-label"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-calendar-grid-58"], ["placeholder", "Select date", "name", "dp", "formControlName", "date", "ngbDatepicker", "", "type", "text", 1, "form-control", "datepicker", 2, "color", "black", "font-weight", "bold", 3, "click"], ["d", "ngbDatepicker"], ["type", "email", "id", "input-email", "formControlName", "suspectName", "placeholder", "Enter Suspect Name", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], [1, "col-lg-6"], ["for", "input-first-name", 1, "form-control-label"], ["type", "text", "id", "input-first-name", "formControlName", "enqOfficerName", "placeholder", "Enter Officer Name", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], ["for", "input-last-name", 1, "form-control-label"], ["type", "file", "id", "input-last-name", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold", 3, "change"], ["class", "form-control-label", "style", "color:blue;cursor: pointer;", "for", "input-first-name", 3, "click", 4, "ngIf"], ["type", "text", "id", "input-last-name", "placeholder", "Review Comments", "formControlName", "reviewComment", 1, "form-control", "form-control-alternative", 2, "color", "black", "font-weight", "bold"], [1, "my-4"], [1, "btn", "btn-info", 3, "disabled", "click"], [1, "btn", "btn-info", 3, "click"], ["for", "input-first-name", 1, "form-control-label", 2, "color", "blue", "cursor", "pointer", 3, "click"]], template: function AddEnquiryComponent_Template(rf, ctx) { if (rf & 1) {
            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Enquiry");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Enquiry");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Enquiry Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEnquiryComponent_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r13.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Name Of Suspect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Enquiry Officer Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Document Upload");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddEnquiryComponent_Template_input_change_51_listener($event) { return ctx.onFileUpload($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddEnquiryComponent_label_52_Template, 2, 0, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Review Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEnquiryComponent_Template_button_click_59_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEnquiryComponent_Template_button_click_61_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "BACK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.enquiryForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enqNo !== "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.enquiryForm.status === "INVALID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnLabel);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".mask[_ngcontent-%COMP%] {\n\n    height: 82%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n    min-height: 343px;\n    background-size: cover;\n    background-position: center top;\n}\n.mt--7[_ngcontent-%COMP%], .my--7[_ngcontent-%COMP%] {\n    margin-top: -10rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWVucXVpcnkvYWRkLWVucXVpcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWVucXVpcnkvYWRkLWVucXVpcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNrIHtcblxuICAgIGhlaWdodDogODIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDM0M3B4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbn1cblxuLm10LS03LCAubXktLTcge1xuICAgIG1hcmdpbi10b3A6IC0xMHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return AddEnquiryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEnquiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-enquiry',
                templateUrl: './add-enquiry.component.html',
                styleUrls: ['./add-enquiry.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);









var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userName = this.userForm.get('userName').value;
        var password = this.userForm.get('password').value;
        this.http.get("https://svu-client.herokuapp.com/api/svu/v1/user/login?userName=" + userName + "&password=" + password).subscribe(function (res) {
            if (res['data'] === 'user not found') {
                //  alert('User not found')
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Login Failed !!!',
                    text: 'User Not Found',
                    footer: '<p style="color:red;font-weight:bold;" href>Contact Super Admin</p>'
                });
            }
            else {
                localStorage.setItem('user', JSON.stringify(res && res['data']));
                _this.router.navigate(['tables']);
            }
        });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 2, consts: [[1, "header", "bg-gradient-danger", "py-7", "py-lg-8"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-lg-5", "col-md-6"], [1, "text-white"], [1, "text-white", 2, "font-weight", "bold", "font-size", "34px"], [1, "text-white", 2, "font-weight", "bold", "font-size", "25px"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-default"], [1, "container", "mt--8", "pb-5"], [1, "col-lg-5", "col-md-7"], [1, ""], [1, "card-header", "bg-transparent", "pb-5"], [1, "text-muted", "text-center", "mt-3", "mb-3"], ["src", "../../../assets/img/brand/red.png", 2, "width", "262px", "margin-top", "-112px"], [1, "card-body", "px-lg-5", "py-lg-5", 2, "margin-top", "-70px"], ["role", "form", 3, "formGroup"], [1, "form-group", "mb-3"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-email-83"], ["formControlName", "userName", "placeholder", "username", "type", "text", 1, "form-control"], [1, "form-group"], [1, "ni", "ni-lock-circle-open"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", "my-4", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SPECIAL VIGILIANCE UNIT PATNA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Case / Enquiry status Report ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm.status === "INVALID");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var SUVENV = "http://" + window.location.hostname;
var environment = {
    suvService: SUVENV,
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tnt/Desktop/SVU/base/svu-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map