(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"],{

/***/ "+Odr":
/*!*******************************************!*\
  !*** ./src/app/carrinho/carrinho.page.ts ***!
  \*******************************************/
/*! exports provided: CarrinhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function() { return CarrinhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carrinho_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carrinho.page.html */ "N6M/");
/* harmony import */ var _carrinho_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrinho.page.scss */ "lhAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CarrinhoPage = class CarrinhoPage {
    constructor() { }
    ngOnInit() {
    }
};
CarrinhoPage.ctorParameters = () => [];
CarrinhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carrinho',
        template: _raw_loader_carrinho_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carrinho_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarrinhoPage);



/***/ }),

/***/ "5PnH":
/*!*****************************************************!*\
  !*** ./src/app/carrinho/carrinho-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CarrinhoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageRoutingModule", function() { return CarrinhoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho.page */ "+Odr");




const routes = [
    {
        path: '',
        component: _carrinho_page__WEBPACK_IMPORTED_MODULE_3__["CarrinhoPage"]
    }
];
let CarrinhoPageRoutingModule = class CarrinhoPageRoutingModule {
};
CarrinhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarrinhoPageRoutingModule);



/***/ }),

/***/ "N6M/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">Conferir o Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  \n  <ion-item-divider>\n    <h2 style=\"text-align: center;\"><b>Pedido Nº 1234455</b></h2>\n  </ion-item-divider>\n\n  <p style=\"text-align: center;\">\n    <b >ITENS PEDIDOS:</b>    \n  </p>\n\n  <ion-list>\n  <ion-item >\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/image/burger.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h2><b>X Tudo</b></h2>\n      <h3>Pão, Milho, Batata, Bife, Bacon</h3>\n      <p><b>R$ 15,38</b></p>\n    </ion-label>\n    <ion-button fill=\"clear\">Remover</ion-button>\n  </ion-item>\n\n  <ion-item (click)=\"addProduto()\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/image/coca.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2><b>Caca Cola Lata</b></h2>\n      <h3>250ml</h3>\n      <p><b>R$ 5,00</b></p>\n    </ion-label>\n    <ion-button fill=\"clear\">Remover</ion-button>\n  </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      Valor total: R$20,00\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" routerLink=\"/confirmar\">Confirmar</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "YWiW":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.module.ts ***!
  \*********************************************/
/*! exports provided: CarrinhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinho-routing.module */ "5PnH");
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrinho.page */ "+Odr");







let CarrinhoPageModule = class CarrinhoPageModule {
};
CarrinhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarrinhoPageRoutingModule"]
        ],
        declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]]
    })
], CarrinhoPageModule);



/***/ }),

/***/ "lhAx":
/*!*********************************************!*\
  !*** ./src/app/carrinho/carrinho.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJyaW5oby5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=carrinho-carrinho-module.js.map