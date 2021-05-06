(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalhes-produto-detalhes-produto-module"],{

/***/ "6fRs":
/*!*************************************************************!*\
  !*** ./src/app/detalhes-produto/detalhes-produto.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGhlcy1wcm9kdXRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "MwKR":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalhes-produto/detalhes-produto.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>detalhes-produto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "OGv3":
/*!***********************************************************!*\
  !*** ./src/app/detalhes-produto/detalhes-produto.page.ts ***!
  \***********************************************************/
/*! exports provided: DetalhesProdutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesProdutoPage", function() { return DetalhesProdutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_produto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes-produto.page.html */ "MwKR");
/* harmony import */ var _detalhes_produto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes-produto.page.scss */ "6fRs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetalhesProdutoPage = class DetalhesProdutoPage {
    constructor() { }
    ngOnInit() {
    }
};
DetalhesProdutoPage.ctorParameters = () => [];
DetalhesProdutoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalhes-produto',
        template: _raw_loader_detalhes_produto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_produto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalhesProdutoPage);



/***/ }),

/***/ "mjPM":
/*!*************************************************************!*\
  !*** ./src/app/detalhes-produto/detalhes-produto.module.ts ***!
  \*************************************************************/
/*! exports provided: DetalhesProdutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesProdutoPageModule", function() { return DetalhesProdutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalhes_produto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhes-produto-routing.module */ "q1Rh");
/* harmony import */ var _detalhes_produto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhes-produto.page */ "OGv3");







let DetalhesProdutoPageModule = class DetalhesProdutoPageModule {
};
DetalhesProdutoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalhes_produto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalhesProdutoPageRoutingModule"]
        ],
        declarations: [_detalhes_produto_page__WEBPACK_IMPORTED_MODULE_6__["DetalhesProdutoPage"]]
    })
], DetalhesProdutoPageModule);



/***/ }),

/***/ "q1Rh":
/*!*********************************************************************!*\
  !*** ./src/app/detalhes-produto/detalhes-produto-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetalhesProdutoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesProdutoPageRoutingModule", function() { return DetalhesProdutoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalhes_produto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhes-produto.page */ "OGv3");




const routes = [
    {
        path: '',
        component: _detalhes_produto_page__WEBPACK_IMPORTED_MODULE_3__["DetalhesProdutoPage"]
    }
];
let DetalhesProdutoPageRoutingModule = class DetalhesProdutoPageRoutingModule {
};
DetalhesProdutoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalhesProdutoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=detalhes-produto-detalhes-produto-module.js.map