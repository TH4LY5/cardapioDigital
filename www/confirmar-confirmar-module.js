(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmar-confirmar-module"],{

/***/ "7tHT":
/*!*********************************************!*\
  !*** ./src/app/confirmar/confirmar.page.ts ***!
  \*********************************************/
/*! exports provided: ConfirmarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarPage", function() { return ConfirmarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmar.page.html */ "aPAC");
/* harmony import */ var _confirmar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmar.page.scss */ "mOjA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConfirmarPage = class ConfirmarPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmarPage.ctorParameters = () => [];
ConfirmarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmar',
        template: _raw_loader_confirmar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmarPage);



/***/ }),

/***/ "H6ci":
/*!*******************************************************!*\
  !*** ./src/app/confirmar/confirmar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarPageRoutingModule", function() { return ConfirmarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirmar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmar.page */ "7tHT");




const routes = [
    {
        path: '',
        component: _confirmar_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmarPage"]
    }
];
let ConfirmarPageRoutingModule = class ConfirmarPageRoutingModule {
};
ConfirmarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmarPageRoutingModule);



/***/ }),

/***/ "HaaS":
/*!***********************************************!*\
  !*** ./src/app/confirmar/confirmar.module.ts ***!
  \***********************************************/
/*! exports provided: ConfirmarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarPageModule", function() { return ConfirmarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirmar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmar-routing.module */ "H6ci");
/* harmony import */ var _confirmar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmar.page */ "7tHT");







let ConfirmarPageModule = class ConfirmarPageModule {
};
ConfirmarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmarPageRoutingModule"]
        ],
        declarations: [_confirmar_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarPage"]]
    })
], ConfirmarPageModule);



/***/ }),

/***/ "aPAC":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmar/confirmar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <img src=\"../../assets/image/ok.png\">\n    <p style=\"text-align: center; font-size: 20px;\">PEDIDO REALIZADO COM SUCESSO</p>\n    <p style=\"text-align: center; font-size: 15px; padding-top: 30px;\">O PEDIDO Nº 1234455 ESTA EM PREPARO PELA COZINHA</p>\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-button shape=\"round\" expand=\"full\" routerLink=\"/tabs\">VOLTA AO INICIO</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "mOjA":
/*!***********************************************!*\
  !*** ./src/app/confirmar/confirmar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  text-align: center;\n}\ndiv img {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm1hci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQUNSIiwiZmlsZSI6ImNvbmZpcm1hci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=confirmar-confirmar-module.js.map