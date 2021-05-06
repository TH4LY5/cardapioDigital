(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selecionar-mesa-selecionar-mesa-module"],{

/***/ "2OuR":
/*!***********************************************************!*\
  !*** ./src/app/selecionar-mesa/selecionar-mesa.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY2lvbmFyLW1lc2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "41FK":
/*!*********************************************************!*\
  !*** ./src/app/selecionar-mesa/selecionar-mesa.page.ts ***!
  \*********************************************************/
/*! exports provided: SelecionarMesaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarMesaPage", function() { return SelecionarMesaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selecionar_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selecionar-mesa.page.html */ "GXXN");
/* harmony import */ var _selecionar_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecionar-mesa.page.scss */ "2OuR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelecionarMesaPage = class SelecionarMesaPage {
    constructor() { }
    ngOnInit() {
    }
};
SelecionarMesaPage.ctorParameters = () => [];
SelecionarMesaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selecionar-mesa',
        template: _raw_loader_selecionar_mesa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selecionar_mesa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelecionarMesaPage);



/***/ }),

/***/ "4W1I":
/*!*******************************************************************!*\
  !*** ./src/app/selecionar-mesa/selecionar-mesa-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelecionarMesaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarMesaPageRoutingModule", function() { return SelecionarMesaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selecionar_mesa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selecionar-mesa.page */ "41FK");




const routes = [
    {
        path: '',
        component: _selecionar_mesa_page__WEBPACK_IMPORTED_MODULE_3__["SelecionarMesaPage"]
    }
];
let SelecionarMesaPageRoutingModule = class SelecionarMesaPageRoutingModule {
};
SelecionarMesaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelecionarMesaPageRoutingModule);



/***/ }),

/***/ "GXXN":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selecionar-mesa/selecionar-mesa.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">Para qual mesa?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col style=\"text-align: center;\" routerLink=\"/carrinho\">\n      <img src=\"../../assets/image/mesa.png\">\n      Mesa 1\n    </ion-col>\n    <ion-col style=\"text-align: center;\">\n      <img src=\"../../assets/image/mesa.png\">\n      Mesa 2\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "qX1u":
/*!***********************************************************!*\
  !*** ./src/app/selecionar-mesa/selecionar-mesa.module.ts ***!
  \***********************************************************/
/*! exports provided: SelecionarMesaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarMesaPageModule", function() { return SelecionarMesaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _selecionar_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selecionar-mesa-routing.module */ "4W1I");
/* harmony import */ var _selecionar_mesa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selecionar-mesa.page */ "41FK");







let SelecionarMesaPageModule = class SelecionarMesaPageModule {
};
SelecionarMesaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _selecionar_mesa_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelecionarMesaPageRoutingModule"]
        ],
        declarations: [_selecionar_mesa_page__WEBPACK_IMPORTED_MODULE_6__["SelecionarMesaPage"]]
    })
], SelecionarMesaPageModule);



/***/ })

}]);
//# sourceMappingURL=selecionar-mesa-selecionar-mesa-module.js.map