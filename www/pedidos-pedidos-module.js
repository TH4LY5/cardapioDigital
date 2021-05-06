(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"],{

/***/ "P2GU":
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageRoutingModule", function() { return PedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos.page */ "hBiI");




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_3__["PedidosPage"]
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ "aB6M":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Pedidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item >\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/image/status1.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>PEDIDO<b>Nº 1234455</b></h2>\n      <h3>MESA 1</h3>\n    </ion-label>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/image/status2.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h2>PEDIDO<b>Nº 1234335</b></h2>\n      <h3>MESA 1</h3>\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "hBiI":
/*!*****************************************!*\
  !*** ./src/app/pedidos/pedidos.page.ts ***!
  \*****************************************/
/*! exports provided: PedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPage", function() { return PedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos.page.html */ "aB6M");
/* harmony import */ var _pedidos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos.page.scss */ "rx6M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PedidosPage = class PedidosPage {
    constructor() { }
    ngOnInit() {
    }
};
PedidosPage.ctorParameters = () => [];
PedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pedidos',
        template: _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PedidosPage);



/***/ }),

/***/ "lRpP":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/*! exports provided: PedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-routing.module */ "P2GU");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos.page */ "hBiI");







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosPageRoutingModule"]
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })
], PedidosPageModule);



/***/ }),

/***/ "rx6M":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pedidos-pedidos-module.js.map