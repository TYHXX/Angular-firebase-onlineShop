(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/admin/services/admin-auth-guard.service.ts");
/* harmony import */ var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-form/product-form.component */ "./src/app/admin/components/product-form/product-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "./src/app/admin/components/admin-products/admin-products.component.ts");
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-orders/admin-orders.component */ "./src/app/admin/components/admin-orders/admin-orders.component.ts");
/* harmony import */ var src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_1__["DataTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                    {
                        path: 'admin/products/new',
                        component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
                        canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/products/:id',
                        component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
                        canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/products',
                        component: _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__["AdminProductsComponent"],
                        canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/orders',
                        component: _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_9__["AdminOrdersComponent"],
                        canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
                    }
                ])
            ],
            declarations: [
                _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__["AdminProductsComponent"],
                _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_9__["AdminOrdersComponent"],
                _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"],
            ],
            providers: [
                _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <a href=\"#\">View (inactive)</a>\n      </td>\n    </tr>\n  </tbody> \n</table>"

/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders$ = orderService.getOrders();
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.component.html */ "./src/app/admin/components/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/components/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_0__["OrderService"]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    <a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a>\r\n</p>\r\n<p>\r\n    <input \r\n    #query\r\n    (keyup)=\"filter(query.value)\"\r\n    type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n</p>\r\n\r\n<data-table\r\n    [items]=\"items\"\r\n    [itemCount]=\"itemCount\"\r\n    (reload) = \"reloadItems($event)\"\r\n>\r\n    <data-table-column\r\n        [property]=\"'title'\"\r\n        [header]=\"'Title'\"\r\n        [sortable]=\"true\"\r\n        [resizable]=\"true\"\r\n    >\r\n    </data-table-column>\r\n\r\n    <data-table-column\r\n        [property]=\"'price'\"\r\n        [header]=\"'Price'\"\r\n        [sortable]=\"true\"\r\n        [resizable]=\"true\"\r\n    >\r\n    <ng-template #dataTableCell let-item = \"item\">\r\n        {{ item.price | currency:'SGD':symbol}}\r\n    </ng-template>\r\n    </data-table-column>\r\n\r\n    <data-table-column\r\n        [property]=\"'key'\"\r\n    >\r\n    <ng-template #dataTableCell let-item = \"item\">\r\n        <a [routerLink]=\"['/admin/products/', item.key]\">Edit</a>\r\n    </ng-template>\r\n    </data-table-column>\r\n\r\n</data-table>\r\n\r\n<!-- <table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Title</th>\r\n            <th>Price</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n            <tr *ngFor=\"let p of filteredProducts\">\r\n            <td>{{p.title}}</td>\r\n            <td>{{p.price}}</td>\r\n            <td>\r\n                <a [routerLink]=\"['/admin/products/', p.key]\">Edit</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table> -->\r\n"

/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll()
            .subscribe(function (products) {
            var temp = products;
            _this.products = temp;
            _this.initilizaTable(_this.products);
            console.log(_this.products);
        });
    }
    AdminProductsComponent.prototype.initilizaTable = function (products) {
        var _this = this;
        this.tableResource = new angular5_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource) {
            return;
        }
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    // tslint:disable-next-line:no-shadowed-variable
    AdminProductsComponent.prototype.filter = function (query) {
        var filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
        console.log(filteredProducts);
        this.initilizaTable(filteredProducts);
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/components/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/components/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required>\n            <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n              Title is required.\n            </div>\n          </div>\n        \n          <div class=\"form-group\">\n              <label for=\"price\">Price</label>\n              <div class=\"input-group\">\n                  <span class=\"input-group-text\">$</span>\n                  <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                <div *ngIf=\"price.errors.required\">Price is required.</div>\n                <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n              </div>\n          </div>\n        \n          <div class=\"form-group\">\n              <label for=\"category\">Category</label>\n              <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n                <option value=\"\"></option>\n                <option *ngFor=\"let c of categories$ | async\" [value]=\"c.key\">\n                  {{ c.name }}\n                </option>\n              </select>\n              <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n                  Category is required.\n              </div>\n          </div>\n        \n          <div class=\"form-group\">\n              <label for=\"imageUrl\">ImageUrl</label>\n              <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n              <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                <div *ngIf=\"imageUrl.errors.required\">ImageUrl is required.</div>\n                <div *ngIf=\"imageUrl.errors.url\">Please Enter a valid URL.</div>\n                  \n              </div>\n          </div>\n        \n          <button class=\"btn btn-primary\">Save</button>\n          <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n        \n        </form>\n  </div>\n  <div class=\"col-md-6\">\n    <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        // categoryService.getCategories()
        // .subscribe(x => {
        //   this.categories$ = x;
        //   console.log(this.categories$);
        // });
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.productService.get(this.id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (p) { return _this.product = p; });
        }
    }
    ProductFormComponent.prototype.save = function (product) {
        // console.log(product);
        if (this.id) {
            this.productService.update(this.id, product);
        }
        else {
            this.productService.creat(product);
        }
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product?')) {
            return;
        }
        console.log(this.id);
        this.productService.detele(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/components/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/components/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/admin-auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/services/admin-auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appUser) { return appUser.isAdmin; }));
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main><!-- /.container -->\n\n"

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
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (user) {
                userService.save(user);
                var returnUrl = localStorage.getItem('returnUrl');
                if (returnUrl) {
                    localStorage.removeItem('returnUrl');
                    router.navigateByUrl(returnUrl);
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.auth.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shopping_components_products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shopping/components/products/products.component */ "./src/app/shopping/components/products/products.component.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_11__["AdminModule"],
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_17__["ShoppingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_9__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _shopping_components_products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
                    { path: 'login', component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.dropdown-toggle {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <i class=\"fas fa-box-open\"></i>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n              <i class=\"fas fa-shopping-cart\"></i>\n              <span class=\"badge badge-warning badge-pill\">\n                {{shoppingCartItemCount}}\n              </span>\n            </a>\n          </li>\n        </ul>\n\n        <ul class=\"navbar-nav\">\n            <ng-template #anonymousUser>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n              </li>\n            </ng-template>\n            \n            <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n              <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{ appUser.name }}\n              </a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n                <ng-container *ngIf=\"appUser.isAdmin\">\n                    <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n                    <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n                </ng-container>\n                <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n              </div>\n            </li>\n        </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
    }
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cart$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appuser) { return _this.appUser = appuser; });
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        cart$ = _a.sent();
                        cart$.subscribe(function (temp) {
                            // let cart: ShoppingCart;
                            // tslint:disable-next-line:prefer-const
                            // let cart: ShoppingCart = new ShoppingCart(null);
                            var data;
                            // data = temp.payload.child('/items').val();
                            // data = temp.payload.val();
                            // cart = data;
                            // console.log(cart);
                            // console.log(cart.items);
                            // this.shoppingCartItemCount = 0;
                            // // tslint:disable-next-line:forin prefer-const
                            // for ( let productId in cart.items) {
                            //   this.shoppingCartItemCount += cart.items[productId].quantity;
                            //   // console.log(cart.items[productId]);
                            //   console.log('productId', productId);
                            //   console.log(cart.items);
                            // }
                            data = temp.payload.child('/items').val();
                            // data = temp.payload.val();
                            // tslint:disable-next-line:prefer-const
                            var cart = new src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](data);
                            // console.log(cart.items);
                            _this.shoppingCartItemCount = cart.totalItemsCount;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/core/components/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/core/components/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/components/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"login()\"\n  class=\"btn btn-primary\">Login with Google</button>"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        // this.auth.logout();
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bs-navbar/bs-navbar.component */ "./src/app/core/components/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
            ],
            declarations: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BsNavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            ],
            exports: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BsNavbarComponent"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card-footer {\r\n    padding: 0;\r\n}\r\n\r\n.card {\r\n    margin-bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"product.title\" class=\"card\">\n  <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"{{ product.title }}\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{product.title}}</h5>\n    <p class=\"card-text\"> {{product.price | currency:'SGD':symbol}}</p>\n  </div>\n  <div *ngIf=\"showActions\" class=\"card-footer\">\n    <button \n      *ngIf=\"getQuantity() === 0; else updateQuantity\"\n      (click)=\"addToCart()\" \n      class=\"btn btn-secondary btn-block\">Add to Cart</button>\n    <ng-template #updateQuantity>\n      <!-- <div class=\"row no-gutters\">\n        <div class=\"col-2\">\n          <button\n            (click)=\"removeFromCart()\" \n            class=\"btn btn-secondary btn-block\">-</button>\n        </div>\n        <div class=\"col text-center\">{{ getQuantity() }} in cart </div>\n        <div class=\"col-2\">\n            <button \n              (click)=\"addToCart()\"\n              class=\"btn btn-secondary btn-block\">+</button>\n        </div>\n      </div> -->\n      <product-quantity [shopping-cart]=\"shoppingCart\" [product]=\"product\"></product-quantity>\n    </ng-template> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        // console.log(this.product);
        this.cartService.addToCart(this.product);
    };
    // removeFromCart() {
    //   this.cartService.removeFromCart(this.product);
    // }
    ProductCardComponent.prototype.getQuantity = function () {
        if (!this.shoppingCart) {
            return 0;
        }
        // console.log(this.shoppingCart);
        var item = this.shoppingCart.itemsMap[this.product.key];
        return item ? item.quantity : 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('shopping-cart'),
        __metadata("design:type", src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shared/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shared/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"row no-gutters\">\n  <div class=\"col-2\">\n    <button\n      (click)=\"removeFromCart()\" \n      class=\"btn btn-secondary btn-block\">-</button>\n  </div>\n  <div class=\"col text-center\">\n    {{ getQuantity() }} in cart \n  </div>\n  <div class=\"col-2\">\n      <button \n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">+</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    ProductQuantityComponent.prototype.getQuantity = function () {
        if (!this.shoppingCart) {
            return 0;
        }
        var item = this.shoppingCart.itemsMap[this.product.key];
        return item ? item.quantity : 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('shopping-cart'),
        __metadata("design:type", src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"])
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/shared/components/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/shared/components/product-quantity/product-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.datePlaced = new Date().getTime();
        this.item = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.product.title,
                    imageUrl: i.product.imageUrl,
                    price: i.product.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart-item.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/shopping-cart-item.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () { return this.product.price * this.quantity; },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/shopping-cart.ts ***!
  \************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/shared/models/shopping-cart-item.ts");

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        // items: ShoppingCartItem[] = [];
        // get productIds() {
        //     return Object.keys(this.items);
        // }
        // get totalItemsCount(): number {
        //     let count = 0;
        //     // tslint:disable-next-line:forin prefer-const
        //     for ( let productId in this.items) {          
        //         count += this.items[productId].quantity;
        //     }
        //     return count;
        // }
        this.items = [];
        this.itemsMap = itemsMap || {};
        // tslint:disable-next-line:forin prefer-const
        for (var productId in itemsMap) {
            // tslint:disable-next-line:prefer-const
            var item = itemsMap[productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartItem"](item.product, item.quantity));
        }
    }
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        // getQuantity(product: Product) {
        //     const item = this.items[product.key];
        //     return item ? item.quantity : 0;
        // }
        get: function () {
            var count = 0;
            // tslint:disable-next-line:forin prefer-const
            for (var productId in this.itemsMap) {
                count += this.itemsMap[productId].quantity;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            // tslint:disable-next-line:forin prefer-const
            for (var productId in this.items) {
                sum += this.items[productId].totalPrice;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                return true;
            }
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (user) {
                if (user) {
                    return _this.userService.get(user.uid).valueChanges();
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', function (ref) { return (ref.orderByChild('name')); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) { return (__assign({ key: a.key }, a.payload.val())); });
        }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrderService = /** @class */ (function () {
    function OrderService(shoppingCartService, db) {
        this.shoppingCartService = shoppingCartService;
        this.db = db;
    }
    OrderService.prototype.placeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders').valueChanges();
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', function (ref) { return ref.orderByChild('userId').equalTo(userId); }).valueChanges();
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.creat = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products')
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) { return (__assign({ key: a.key }, a.payload.val())); });
        }));
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.detele = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/shopping-cart.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/shopping-cart.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    // async getCart(): Promise<Observable<ShoppingCart>> {
    //   const cartId = await this.getOrCreatCartId();
    //   return this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
    //     map(x => new ShoppingCart(x.payload))
    //   );
    // }
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreatCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId).snapshotChanges()];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // const cartId = await this.getOrCreatCartId();
                // const item = this.getItem(cartId, product.key);
                // item.snapshotChanges().pipe(take(1))
                // .subscribe(data => {
                //   // if (data.payload.exists()) {
                //   //   item.update({quantity: data.payload.child('/quantity').val() + 1});
                //   // } else {
                //   //   item.set({product: product, quantity: 1});
                //   // }
                //   item.update({product: product, 
                //     quantity: (data.payload.child('/quantity').val() || 0) + 1});
                // });
                this.updateItemQuantity(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItemQuantity(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreatCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.creat = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreatCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId) {
                            return [2 /*return*/, cartId];
                        }
                        return [4 /*yield*/, this.creat()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItemQuantity = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreatCartId()];
                    case 1:
                        cartId = _a.sent();
                        item = this.getItem(cartId, product.key);
                        item.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                            .subscribe(function (data) {
                            var quantity = (data.payload.child('/quantity').val() || 0) + change;
                            if (quantity === 0) {
                                item.remove();
                            }
                            else {
                                item.update({ product: product,
                                    quantity: quantity });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var src_app_shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/product-quantity/product-quantity.component */ "./src/app/shared/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_1__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_0__["DataTableModule"]
            ],
            declarations: [
                src_app_shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_5__["ProductCardComponent"],
                src_app_shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_6__["ProductQuantityComponent"],
            ],
            exports: [
                src_app_shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_5__["ProductCardComponent"],
                src_app_shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_6__["ProductQuantityComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_1__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_0__["DataTableModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"],
                src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
                src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartService"],
                src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/components/check-out/check-out.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/components/check-out/check-out.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/check-out/check-out.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shopping/components/check-out/check-out.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Shipping</h2>\n<div class=\"row\">\n  <div class=\"col-6\">\n    <!-- <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n          <div *ngIf=\"name.errors.required\">Name is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Address</label>\n        <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Line 1\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n          <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\"></label>\n        <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"Line 2\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n          <div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">City</label>\n        <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" type=\"text\" class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n          <div *ngIf=\"city.errors.required\">City is required.</div>\n        </div>\n      </div>\n      <button \n        (click)=\"placeOrder()\"\n        class=\"btn btn-primary\">Place Order</button>\n    </form> -->\n  \n    <shipping-form [cart]=\"cart\"></shipping-form>\n  </div>\n  <div class=\"col-6\">\n    <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping/components/check-out/check-out.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shopping/components/check-out/check-out.component.ts ***!
  \**********************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cart$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        cart$ = _a.sent();
                        this.cartSubscription = cart$.subscribe(function (cart) {
                            var temp;
                            temp = cart.payload.child('/items').val();
                            _this.cart = new src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](temp);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent.prototype.ngOnDestroy = function () {
        this.cartSubscription.unsubscribe();
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/shopping/components/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/shopping/components/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/my-orders/my-orders.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/components/my-orders/my-orders.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/my-orders/my-orders.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shopping/components/my-orders/my-orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <a href=\"\">View (inactive)</a>\n      </td>\n    </tr>\n  </tbody> \n</table>"

/***/ }),

/***/ "./src/app/shopping/components/my-orders/my-orders.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shopping/components/my-orders/my-orders.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.orders$ = authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (u) { return orderService.getOrdersByUser(u.uid); }));
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/shopping/components/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/shopping/components/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/order-success/order-success.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/order-success/order-success.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/order-success/order-success.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shopping/components/order-success/order-success.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/shopping/components/order-success/order-success.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/order-success/order-success.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/shopping/components/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/shopping/components/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/products/product-filter/product-filter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/shopping/components/products/product-filter/product-filter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sticky-top {\r\n    top: 80px;\r\n}"

/***/ }),

/***/ "./src/app/shopping/components/products/product-filter/product-filter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/shopping/components/products/product-filter/product-filter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n  <div class=\"list-group\">\n    <a\n      routerLink = \"/\"\n      class=\"list-group-item list-group-item-action\" \n      [class.active]= \"(!category)\" >\n      All Categories\n    </a>\n    <a *ngFor=\"let c of categories$ | async\" \n        routerLink = \"/\"\n        [queryParams]=\"{ category: c.key}\"\n        class=\"list-group-item list-group-item-action\"\n        [class.active]= \"(category === c.key)\">\n      {{c.name}}\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping/components/products/product-filter/product-filter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shopping/components/products/product-filter/product-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/shopping/components/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/shopping/components/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_0__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/products/products.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/components/products/products.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/products/products.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shopping/components/products/products.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-3\">\n    <product-filter [category]=\"category\"></product-filter>\n  </div>\n  <div class=\"col\">\n    <div class=\"row\">\n        <ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n          <div class=\"col\">\n              <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n          </div>\n          <div *ngIf=\"(i+1) % 2 === 0\" class=\"w-100\"></div>\n        </ng-container>\n      </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/shopping/components/products/products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shopping/components/products/products.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent())
                            .subscribe(function (cart) {
                            var temp;
                            temp = cart.payload.child('/items').val();
                            _this.cart = new src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](temp);
                            // this.cart = temp;
                            // console.log(this.cart);
                        });
                        this.productService.getAll()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (products) {
                            var temp;
                            temp = products;
                            _this.products = temp;
                            return _this.route.queryParamMap;
                        }))
                            .subscribe(function (params) {
                            _this.category = params.get('category');
                            _this.filteredProducts = (_this.category) ?
                                _this.products.filter(function (p) { return p.category === _this.category; }) :
                                _this.products;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shopping/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/shopping/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shipping-form/shipping-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/shipping-form/shipping-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/shipping-form/shipping-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shopping/components/shipping-form/shipping-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"\">Name</label>\n    <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" class=\"form-control\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n      <div *ngIf=\"name.errors.required\">Name is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Address</label>\n    <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Line 1\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n      <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\"></label>\n    <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"Line 2\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n      <div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required.</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">City</label>\n    <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" type=\"text\" class=\"form-control\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n      <div *ngIf=\"city.errors.required\">City is required.</div>\n    </div>\n  </div>\n  <button \n    [disabled]=\"!f.valid\"\n    (click)=\"placeOrder()\"\n    class=\"btn btn-primary\">Place Order</button>\n</form>\n"

/***/ }),

/***/ "./src/app/shopping/components/shipping-form/shipping-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/shipping-form/shipping-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/order */ "./src/app/shared/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription =
            this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new src_app_shared_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        // console.log(order);
                        this.router.navigate(['/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('cart'),
        __metadata("design:type", src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/shopping/components/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shopping/components/shipping-form/shipping-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart\" class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Order Summary</h5>\n    <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart</p>\n    <ul class=\"list-group list-group-flush\">\n      <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n        {{ item.quantity }} x {{ item.product.title }}\n        <div class=\"float-right\">\n          {{ item.totalPrice | currency:'SGD':symbol }}\n        </div>\n      </li>\n      <li class=\"list-group-item font-weight-bold\">\n        Total\n        <div class=\"float-right\">\n          {{ cart.totalPrice | currency:'SGD':symbol }}\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    ShoppingCartSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shopping-cart/shopping-cart.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart/shopping-cart.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart/shopping-cart.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart/shopping-cart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<div class=\"row col-10\">\n  <p>\n      You have {{cart.totalItemsCount}} items in your shopping cart.\n      <button\n      *ngIf = \"cart.items.length\"\n      (click)=\"clearCart()\"\n      class=\"btn btn-sm\">Clear Shopping Cart</button>\n  </p>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\" style=\"width: 230px\">Quantity</th>\n        <th class=\"text-right\" style=\"width: 200px\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <td>\n          <div [style.backgroundImage]=\"'url(' + item.product.imageUrl + ')'\" class=\"thumbnail\" alt=\"\"></div>\n        </td>\n        <td>\n          {{ item.product.title}}\n        </td>\n        <td>\n            <!-- {{ item.quantity}}  -->\n\n            <div class=\"row no-gutters\">\n              <div class=\"col-2\">\n                <button\n                  (click)=\"removeFromCart(item.product)\" \n                  class=\"btn btn-secondary btn-block\">-</button>\n              </div>\n              <div class=\"col text-center\">{{ getQuantity(item.product) }} in cart </div>\n              <div class=\"col-2\">\n                  <button \n                    (click)=\"addToCart(item.product)\"\n                    class=\"btn btn-secondary btn-block\">+</button>\n              </div>\n            </div>\n\n            <!-- <product-quantity [shopping-cart]=\"cart\" [product]=\"item.product\"></product-quantity> -->\n        </td>\n        <td class=\"text-right\">\n          {{ item.totalPrice | currency:'SGD':symbol}}\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th class=\"text-right\">{{cart.totalPrice | currency:'SGD':symbol}}</th>\n      </tr>\n    </tfoot>\n  </table>\n  <a \n    *ngIf = \"cart.items.length\"\n    routerLink=\"/check-out\"\n    class=\"btn btn-primary\">Check Out</a>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart/shopping-cart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart/shopping-cart.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.cart = new src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](null);
    }
    ShoppingCartComponent.prototype.addToCart = function (product) {
        this.shoppingCartService.addToCart(product);
    };
    ShoppingCartComponent.prototype.removeFromCart = function (product) {
        this.shoppingCartService.removeFromCart(product);
    };
    ShoppingCartComponent.prototype.getQuantity = function (product) {
        if (!this.cart) {
            return 0;
        }
        var item = this.cart.itemsMap[product.key];
        // console.log(this.cart.items);
        return item ? item.quantity : 0;
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cart$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        cart$ = _a.sent();
                        cart$.subscribe(function (temp) {
                            // tslint:disable-next-line:prefer-const
                            var data;
                            data = temp.payload.child('/items').val();
                            // data = temp.payload.val();
                            _this.cart = new src_app_shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"](data);
                            _this.shoppingCartItemCount = _this.cart.totalItemsCount;
                            // console.log('data', data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/shopping/components/products/products.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/shopping/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/shopping/components/check-out/check-out.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/shopping/components/order-success/order-success.component.ts");
/* harmony import */ var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-orders/my-orders.component */ "./src/app/shopping/components/my-orders/my-orders.component.ts");
/* harmony import */ var _components_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/product-filter/product-filter.component */ "./src/app/shopping/components/products/product-filter/product-filter.component.ts");
/* harmony import */ var _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shipping-form/shipping-form.component */ "./src/app/shopping/components/shipping-form/shipping-form.component.ts");
/* harmony import */ var src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] },
                    { path: 'check-out', component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_7__["CheckOutComponent"], canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
                    { path: 'order-success/:id', component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"], canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
                    { path: 'my/orders', component: _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__["MyOrdersComponent"], canActivate: [src_app_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
                ])
            ],
            declarations: [
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"],
                _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_7__["CheckOutComponent"],
                _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"],
                _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__["MyOrdersComponent"],
                _components_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_10__["ProductFilterComponent"],
                _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartSummaryComponent"],
                _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_12__["ShippingFormComponent"]
            ]
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCuwbndUZSktCKA2ONcWLedqhmEQzI0A7U",
        authDomain: "myshop-60486.firebaseapp.com",
        databaseURL: "https://myshop-60486.firebaseio.com",
        projectId: "myshop-60486",
        storageBucket: "myshop-60486.appspot.com",
        messagingSenderId: "138616684787"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wsg0440\Desktop\My Projects\WebTechTraining\code-with-Mosh\Angular4-b2p\angularCourse\myshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map