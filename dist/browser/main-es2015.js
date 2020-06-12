(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-employee></app-employee> -->\n<!-- <app-employee-custom></app-employee-custom> -->\n<!-- <ul>\n    <li><a mat-button href=\"/#/ngrx\">NgRx Example</a></li>\n    <li><a mat-button href=\"/#/empform\">Employee Registration Form</a></li>\n    <li><a mat-button href=\"/#/customMatGrid\">Custom/Reusable Mat Grid</a></li>\n    <li class=\"nav-item\" *ngFor=\"let route of existingRoutes$ | async\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"route.path\">{{route.displayName | titlecase}}</a>\n    </li>\n</ul> -->\n<div class=\"nav-btn\">\n    <button mat-raised-button ><a id=\"ngrx\" href=\"/#/ngrx\" class=\"first\" name=\"ngrx\">NgRx Example</a></button>\n    <button mat-raised-button ><a href=\"/#/empform\">Employee Registration Form</a></button>\n    <button mat-raised-button ><a href=\"/#/customMatGrid\">Custom/Reusable Mat Grid</a></button>\n    <button mat-raised-button *ngFor=\"let route of existingRoutes$ | async\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"route.path\">{{route.displayName | titlecase}}</a>\n    </button>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\"><p>Employee Financial Details</p></div>\n<custom-lib-custom-mat-grid [tableData]=\"tableData1\" [columnHeader]=\"columnHeader1\"></custom-lib-custom-mat-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/emp-form/emp-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/emp-form/emp-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutGap=\"12px\">\n    <mat-card style=\"max-width: 500px;margin: auto;border: 1px solid;\">\n      <mat-card-actions align=\"middle\">\n        <button mat-raised-button color=\"primary\" (click)=\"onSetTheme('default-theme')\">Default</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onSetTheme('dark-theme')\">Dark</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onSetTheme('light-theme')\">Light</button>\n      </mat-card-actions>\n    </mat-card>\n    <mat-card style=\"max-width: 500px;margin: auto;border: 1px solid;\" *ngFor=\"let card of formFieldsCards; let indx = index\">\n      <form #f=\"ngForm\">\n        <span class=\"emp-header\">Employee Registration Form</span>\n        <div *ngFor=\"let field of card\">\n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'button'\">\n            <mat-grid-tile>\n              <label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label>\n            </mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <button id=\"{{field.propertyID}}-{{indx}}\" mat-raised-button color=\"primary\">\n                  {{field.defaultValue}}\n                </button>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'buttonGroup'\">\n            <mat-grid-tile>\n              <label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label>\n            </mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-button-toggle-group (change)=\"onChange($event, field)\" name=\"buttonGroupField\"\n                  [(ngModel)]=\"field.value\" name=\"togglebtn\">\n                  <mat-button-toggle *ngFor=\"let data of field.dataEnum\" id=\"{{field.propertyID}}-{{indx}}\"\n                    value=\"{{data}}\" style=\"font-size: 14px;\" name=\"togglebtn\">\n                    {{data}}\n                  </mat-button-toggle>\n                </mat-button-toggle-group>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'checkbox'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-checkbox (change)=\"onChange($event, field)\" id=\"{{field.propertyID}}-{{indx}}\"\n                  value=\"{{field.defaultValue}}\" name=\"checkboxField\" [(ngModel)]=\"field.value\">{{field.placeholder}}\n                </mat-checkbox>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"70px\" *ngIf=\"field.uiElementType == 'datetime'\" >\n            <mat-grid-tile>\n              <mat-label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></mat-label>\n            </mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-form-field>\n                  <mat-label>{{field.placeholder}}</mat-label>\n                  <input matInput [matDatepicker]=\"picker\" name=\"datetimeField\" [(ngModel)]=\"field.value\"\n                    (change)=\"onChange($event, field)\" id=\"{{field.propertyID}}-{{indx}}\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                    <mat-icon matDatepickerToggleIcon>></mat-icon>\n                  </mat-datepicker-toggle>\n                  <mat-datepicker #picker>\n                  </mat-datepicker>\n                </mat-form-field>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'radio'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-radio-group (change)=\"onChange($event, field)\" name=\"radioButtonField\" [(ngModel)]=\"field.value\"\n                  id=\"{{field.propertyID}}-{{indx}}\" required #radioButtonField=\"ngModel\">\n                  <mat-radio-button value=\"{{field.defaultValue}}\">\n                    {{field.placeholder}}\n                  </mat-radio-button>\n                </mat-radio-group>\n                <div *ngIf=\"radioButtonField.invalid && (radioButtonField.dirty || radioButtonField.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"radioButtonField.errors.required\">\n                    *Required Field\n                  </div>\n                </div>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"70px\" *ngIf=\"field.uiElementType == 'select'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-form-field>\n                  <mat-label>{{field.placeholder}}</mat-label>\n                  <mat-select name=\"selectField\" [(ngModel)]=\"field.value\" (change)=\"onChange($event, field)\">\n                    <mat-option *ngFor=\"let data of field.dataEnum\" id=\"{{field.propertyID}}-{{indx}}\" [value]=\"data\">\n                      {{data}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'slider'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-slider id=\"{{field.propertyID}}-{{indx}}\" name=\"sliderField\" [(ngModel)]=\"field.value\"\n                  (change)=\"onChange($event, field)\" tickInterval=\"1000\" min=\"1\" max=\"100000\">\n                  {{field.placeholder}}</mat-slider>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"5:1\" *ngIf=\"field.uiElementType == 'text'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <input matInput id=\"{{field.propertyID}}-{{indx}}\" placeholder=\"{{field.placeholder}}\"\n                  value=\"{{field.defaultValue}}\" id=\"{{field.propertyID}}\" name=\"textField\" required\n                  [(ngModel)]=\"field.value\" (change)=\"onChange($event, field)\" #textField=\"ngModel\" />\n                <div *ngIf=\"textField.invalid && (textField.dirty || textField.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"textField.errors.required\">\n                    *Required Field\n                  </div>\n                </div>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n  \n          <mat-grid-list cols=\"2\" rowHeight=\"70px\" *ngIf=\"field.uiElementType == 'autocomplete'\">\n            <mat-grid-tile><label>{{field.propertyLabel}} <span *ngIf=\"field.required\">*</span></label></mat-grid-tile>\n            <mat-grid-tile>\n              <div style=\"position: absolute; left: 2px;\">\n                <mat-form-field>\n                  <input type=\"text\" placeholder=\"{{field.placeholder}}\" matInput [matAutocomplete]=\"auto\"\n                    id=\"{{field.propertyID}}-{{indx}}\" name=\"autocompleteField\" [(ngModel)]=\"field.value\"\n                    (change)=\"onChange($event, field)\">\n                  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let data of field.dataEnum\" [value]=\"data\">\n                      {{data}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n        <mat-card-actions align=\"middle\">\n          <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"f.invalid\"\n            (click)=\"onSubmit(f)\">Submit</button>\n          <button mat-raised-button color=\"accent\" (click)=\"onClear()\">Clear</button>\n        </mat-card-actions>\n        <mat-card-actions align=\"end\">\n          <button mat-button color=\"accent\" (click)=\"replicateFormArr()\">Add New Form</button>\n          <button mat-button color=\"accent\" (click)=\"delete()\">Delete</button>\n        </mat-card-actions>\n      </form>\n    </mat-card>\n  </div>\n  <style>\n    mat-button-toggle {\n      width: 75px;\n      font-size: 8px;\n    }\n  </style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>    \n    <span class=\"example-spacer\"></span>\n      <button mat-raised-button style=\"margin: 0 10px;position: absolute;\" name=\"insert\" id=\"insertbtn\" class=\"insertbtn\" (click)=\"openInsertDialog()\">\n        Insert\n      </button> &nbsp;\n      <button mat-icon-button id=\"theme-selector\" [mat-menu-trigger-for]=\"themeMenu\"\n            i18n-matTooltip=\"@@Select-a-theme\" matTooltip=\"Select a theme!\"\n            tabindex=\"-1\">\n        <mat-icon class=\"auto-flip\">format_color_fill</mat-icon>\n      </button>\n\n      <mat-menu #themeMenu=\"matMenu\">\n        <mat-checkbox [checked]=\"isThemeDark\"\n                  (click)=\"$event.stopPropagation()\"\n                  (change)=\"toggleDarkness()\"\n                  class=\"mat-menu-item theme-selector-is-dark\" i18n=\"@@Dark\">Dark\n        </mat-checkbox>\n      </mat-menu>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<app-mat-spinner-overlay *ngIf='showSpinner' overlay=\"true\"></app-mat-spinner-overlay>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" *ngIf=\"!showSpinner\">\n\n    <!-- Row Index Column -->\n    <ng-container matColumnDef=\"index\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sr.No. </th>\n      <td mat-cell *matCellDef=\"let element; let i = index\">{{i+1}}</td>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Employee ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n    <!-- Surname Column -->\n    <ng-container matColumnDef=\"surname\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Surname </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\n    </ng-container>\n  \n    <!-- Department Column -->\n    <ng-container matColumnDef=\"dept\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dept}} </td>\n    </ng-container>\n\n    <!-- Join Date Column -->\n    <ng-container matColumnDef=\"joindate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Join Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.joindate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <mat-icon aria-hidden=\"false\" aria-label=\"Example delete icon\" (click)=\"openDeleteDialog(element);\">delete</mat-icon> &nbsp;&nbsp;&nbsp;&nbsp;\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example edit icon\" id=\"Update\" (click)=\"openUpdateDialog(element);\">edit</mat-icon>\n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" ></tr>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"overlay;else progressSpinner\">\n    <div class=\"overlay\">\n        <div class=\"center\">\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\n        </div>\n    </div>\n    </ng-container>\n    <ng-template #progressSpinner>\n        <mat-spinner class='track'\n         [diameter]=\"diameter\"\n         [mode]=\"mode\" \n         [color]=\"color\"\n         [strokeWidth]=\"strokeWidth\"\n         [value]=\"value\">\n        </mat-spinner>\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\n    {{title}}\n  </div>\n  \n  <div mat-dialog-content>\n    {{message}}\n  </div>\n  \n  <div mat-dialog-actions align=\"end\">\n    <button mat-raised-button (click)=\"onConfirm()\">Yes</button>&nbsp;&nbsp;\n    <button mat-raised-button (click)=\"onDismiss()\">No</button>\n  </div>\n\n  <!-- <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{title}} Data</h1>\n<div mat-dialog-content>\n  <form name=\"insertForm\" [formGroup]=\"insertForm\">\n    <div>\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput type=\"text\" id=\"name\" formControlName=\"name\" \n         [ngClass]=\"{'is-invalid':insertForm.get('name').touched && insertForm.get('name').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('name').touched && insertForm.get('name').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('name').errors.required\">Name is required</div>\n        <div *ngIf=\"insertForm.get('name').errors.minlength\">Name must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>Surname</mat-label>\n        <input matInput type=\"text\" id=\"surname\" formControlName=\"surname\" \n         [ngClass]=\"{'is-invalid':insertForm.get('surname').touched && insertForm.get('surname').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('surname').touched && insertForm.get('surname').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('surname').errors.required\">Surname is required</div>\n        <div *ngIf=\"insertForm.get('surname').errors.minlength\">Surname must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>Department</mat-label>\n        <input matInput type=\"text\" id=\"dept\" formControlName=\"dept\"  \n        [ngClass]=\"{'is-invalid':insertForm.get('dept').touched && insertForm.get('dept').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('dept').touched && insertForm.get('dept').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('dept').errors.required\">Department is required</div>\n        <div *ngIf=\"insertForm.get('dept').errors.minlength\">Department must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>JoinDate</mat-label>\n        <input matInput [matDatepicker]=\"picker\" id=\"joindate\" type=\"text\" formControlName=\"joindate\"  \n        [ngClass]=\"{'is-invalid':insertForm.get('joindate').touched && insertForm.get('joindate').invalid}\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n       <div *ngIf=\"insertForm.get('joindate').touched && insertForm.get('joindate').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('joindate').errors.required\">Join Date is required</div>\n      </div>\n    </div>\n\n    <!-- <div>\n      <mat-form-field>\n        <mat-label>Qualification</mat-label>\n        <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n          <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div> -->\n    \n  </form>\n \n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button [mat-dialog-close]=\"data\" (click)=\"onInsertSubmit()\"  *ngIf=\"this.isSubmit\" [disabled]=\"!insertForm.valid\">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;\n  <button mat-raised-button [mat-dialog-close]=\"data\" (click)=\"onUpdateSubmit()\"  *ngIf=\"this.isUpdate\" [disabled]=\"!insertForm.valid\">Update</button>&nbsp;\n  <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-btn {\n  padding: 0 20px;\n  margin: 20px 0;\n}\n.nav-btn a {\n  text-decoration: none;\n}\n.nav-btn button {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE1haW4gdGFza1xccG9jLXRhc2stbWFzdGVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYnRuIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgfVxufVxuIiwiLm5hdi1idG4ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLm5hdi1idG4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXYtYnRuIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/router.service */ "./src/app/service/router.service.ts");
/* harmony import */ var _service_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/module.service */ "./src/app/service/module.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(moduleService, routerService) {
        this.moduleService = moduleService;
        this.routerService = routerService;
        this.existingRoutes$ = this.moduleService.loadModules().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => res.forEach(x => {
            this.registerRoute(x);
        })));
    }
    registerRoute(moduleToEnable) {
        this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
            this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"] },
    { type: _service_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createCompiler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-grid/employee.component */ "./src/app/components/custom-grid/employee.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/insert-dialog/insert-dialog.component */ "./src/app/shared/insert-dialog/insert-dialog.component.ts");
/* harmony import */ var _service_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_mat_spinner_overlay_mat_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mat-spinner-overlay/mat-spinner-overlay.component */ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_employee_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/employee.effects */ "./src/app/store/employee.effects.ts");
/* harmony import */ var custom_mat_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! custom-mat-grid */ "./node_modules/custom-mat-grid/fesm2015/custom-mat-grid.js");
/* harmony import */ var _app_service_module_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../app/service/module.service */ "./src/app/service/module.service.ts");
/* harmony import */ var _app_service_router_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/service/router.service */ "./src/app/service/router.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _components_emp_form_emp_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/emp-form/emp-form.component */ "./src/app/components/emp-form/emp-form.component.ts");


















// import { HttpModule } from '@angular/http';















function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"],
            _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__["CustomEmployeeComponent"],
            _shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"],
            _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InsertDialogComponent"],
            _components_mat_spinner_overlay_mat_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_22__["MatSpinnerOverlayComponent"],
            _components_emp_form_emp_form_component__WEBPACK_IMPORTED_MODULE_32__["EmpFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_23__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_25__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsModule"].forRoot([_store_employee_effects__WEBPACK_IMPORTED_MODULE_26__["EmployeeEffects"]]),
            custom_mat_grid__WEBPACK_IMPORTED_MODULE_27__["CustomMatGridModule"],
            // HttpModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"].forRoot([
                {
                    path: '', redirectTo: '', pathMatch: 'full'
                },
                {
                    path: 'ngrx', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"]
                },
                {
                    path: 'empform', component: _components_emp_form_emp_form_component__WEBPACK_IMPORTED_MODULE_32__["EmpFormComponent"]
                },
                {
                    path: 'customMatGrid', component: _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__["CustomEmployeeComponent"]
                },
                {
                    path: 'dynamicModuleLoader', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                }
            ], { useHash: true })
        ],
        providers: [_service_employee_service__WEBPACK_IMPORTED_MODULE_16__["EmployeeService"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _service_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"], _app_service_module_service__WEBPACK_IMPORTED_MODULE_28__["ModuleService"], _app_service_router_service__WEBPACK_IMPORTED_MODULE_29__["RouterService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["COMPILER_OPTIONS"], useValue: {}, multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_31__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["COMPILER_OPTIONS"]] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CompilerFactory"]] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"], _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InsertDialogComponent"]],
        exports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/custom-grid/employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/custom-grid/employee.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEmployeeComponent", function() { return CustomEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomEmployeeComponent = class CustomEmployeeComponent {
    constructor() {
        this.columnHeader1 = { 'empID': 'Employee ID', 'empName': 'Employee Name', 'bankName': 'Bank Name', 'branch': 'Branch' };
        this.tableData1 = [
            { empID: 1, empName: 'Pramod Sharma', bankName: "HDFC Bank", branch: 'Mumbai' },
            { empID: 2, empName: 'Satish Diwan', bankName: "ICICI Bank", branch: 'Pune' },
            { empID: 3, empName: 'Sachin Pandey', bankName: "IDFC Bank", branch: 'Hyderabad' },
            { empID: 4, empName: 'Nitin Naik', bankName: "Yes Bank", branch: 'Kolhapur' },
            { empID: 5, empName: 'Amrut Joshi', bankName: "Axis Bank", branch: 'Delhi' },
            { empID: 6, empName: 'Ajit Patil', bankName: "City Bank", branch: 'Surat' },
        ];
    }
};
CustomEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html")).default
    })
], CustomEmployeeComponent);



/***/ }),

/***/ "./src/app/components/emp-form/emp-form.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/emp-form/emp-form.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".emp-header {\n  text-align: center;\n  display: block;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXAtZm9ybS9DOlxcTWFpbiB0YXNrXFxwb2MtdGFzay1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVtcC1mb3JtXFxlbXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lbXAtZm9ybS9lbXAtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wLWZvcm0vZW1wLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLmVtcC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/emp-form/emp-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/emp-form/emp-form.component.ts ***!
  \***********************************************************/
/*! exports provided: EmpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpFormComponent", function() { return EmpFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_form_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/form.json */ "./src/assets/form.json");
var _assets_form_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/form.json */ "./src/assets/form.json", 1);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");




let EmpFormComponent = class EmpFormComponent {
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.formFields = _assets_form_json__WEBPACK_IMPORTED_MODULE_2__;
        this.formFieldsCards = [this.formFields];
    }
    ngOnInit() {
        this.overlayContainer.getContainerElement().classList.add('default-theme');
        this.componentCssClass = 'default-theme';
    }
    onSetTheme(theme) {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
    replicateFormArr() {
        var tempArr = [...this.formFields];
        this.formFieldsCards.push(tempArr);
        return false;
    }
    onClear() {
        window.location.reload(true);
    }
    onChange(event, field) {
        if (this[field.onChange]) {
            this[field.onChange](event);
        }
    }
    onChangeEvent(event) {
        if (event) {
            if (event.hasOwnProperty("value"))
                console.log("Change Event Triggered, Value = " + event.value);
            else if (event.hasOwnProperty("checked"))
                console.log("Change Event Triggered, Value = " + event.checked);
            else
                console.log("Change Event Triggered, Value = " + event.target.value);
        }
    }
    onSubmit(f) {
        var keys = Object.keys(f.form.controls);
        var result = "";
        keys.forEach(function (key) {
            result += key + " - " + f.form.controls[key].value + "\n";
        });
        alert(result);
        console.log(result);
        return false;
    }
    delete() {
        this.formFieldsCards = this.formFieldsCards.slice(0, (this.formFieldsCards.length - 1));
        return false;
    }
};
EmpFormComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], EmpFormComponent.prototype, "componentCssClass", void 0);
EmpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emp-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emp-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/emp-form/emp-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emp-form.component.scss */ "./src/app/components/emp-form/emp-form.component.scss")).default]
    })
], EmpFormComponent);



/***/ }),

/***/ "./src/app/components/employee/employee.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #6ebe49;\n}\n\n::ng-deep .mat-progress-spinner circle {\n  fill: transparent;\n  transform-origin: center;\n  transition: stroke-dashoffset 225ms linear !important;\n}\n\n::ng-deep .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle {\n  transition-property: stroke !important;\n  -webkit-animation-duration: 4s !important;\n          animation-duration: 4s !important;\n  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1) !important;\n          animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1) !important;\n  -webkit-animation-iteration-count: infinite !important;\n          animation-iteration-count: infinite !important;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.theme-selectors-container {\n  width: 190px;\n  margin: 0 8px;\n}\n\nbutton.theme-selector {\n  width: 80px;\n  height: 80px;\n}\n\ndiv.theme-primary {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n}\n\ndiv.theme-accent {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\ndiv.theme-warn {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  bottom: 7%;\n  left: 20%;\n  transform: rotate(45deg);\n}\n\n.theme-check {\n  color: white;\n  font-size: 3.2em;\n}\n\n.theme-selector-is-dark {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.insertbtn {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9DOlxcTWFpbiB0YXNrXFxwb2MtdGFzay1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVtcGxveWVlXFxlbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURDRTtFQUNFLGNBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNFSjs7QURBRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxREFBQTtBQ0dKOztBRERBO0VBQ0Usc0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsNEVBQUE7VUFBQSxvRUFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURJQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDREQ7O0FESUE7RUFUQyxXQVVjO0VBVGQsWUFBQTtBQ1NEOztBREdBO0VBYkMsV0FjYztFQWJkLFlBQUE7RUFjQSxrQkFBQTtBQ0NEOztBREVBO0VBbEJDLFdBbUJjO0VBbEJkLFlBQUE7RUFtQkEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0VEOztBRENBO0VBekJDLFdBMEJjO0VBekJkLFlBQUE7RUEwQkEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FDR0Q7O0FEQUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUNHRDs7QUREQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QUNJRDs7QURGQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0tEOztBREhBO0VBQ0MsZUFBQTtBQ01EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjNmViZTQ5O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlIHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMjI1bXMgbGluZWFyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1wcm9ncmVzcy1zcGlubmVyLWluZGV0ZXJtaW5hdGUtYW5pbWF0aW9uW21vZGU9aW5kZXRlcm1pbmF0ZV0gY2lyY2xlIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogc3Ryb2tlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHMgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZSAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0OiBudWxsKSB7XG5cdHdpZHRoOiAkd2lkdGg7XG5cdGhlaWdodDogaWYoJGhlaWdodD09bnVsbCwgJHdpZHRoLCAkaGVpZ2h0KTtcbn1cblxuLnRoZW1lLXNlbGVjdG9ycy1jb250YWluZXJ7XG5cdHdpZHRoOiAxOTBweDtcblx0bWFyZ2luOiAwIDhweDtcbn1cblxuYnV0dG9uLnRoZW1lLXNlbGVjdG9yIHtcblx0QGluY2x1ZGUgc2l6ZSg4MHB4KTtcbn1cblxuZGl2LnRoZW1lLXByaW1hcnkge1xuXHRAaW5jbHVkZSBzaXplKDcwcHgpO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmRpdi50aGVtZS1hY2NlbnQge1xuXHRAaW5jbHVkZSBzaXplKDI1cHgpO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcbn1cblxuZGl2LnRoZW1lLXdhcm4ge1xuXHRAaW5jbHVkZSBzaXplKDE1cHgpO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogNyU7XG5cdGxlZnQ6IDIwJTtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4udGhlbWUtY2hlY2sge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMy4yZW07XG59XG4udGhlbWUtc2VsZWN0b3ItaXMtZGFyayB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDEuMmVtO1xufVxuLmNlbnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uaW5zZXJ0YnRue1xuXHRmb250LXNpemU6IDE0cHg7XG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzZlYmU0OTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAyMjVtcyBsaW5lYXIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1pbmRldGVybWluYXRlLWFuaW1hdGlvblttb2RlPWluZGV0ZXJtaW5hdGVdIGNpcmNsZSB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHN0cm9rZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZSAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRoZW1lLXNlbGVjdG9ycy1jb250YWluZXIge1xuICB3aWR0aDogMTkwcHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbmJ1dHRvbi50aGVtZS1zZWxlY3RvciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbmRpdi50aGVtZS1wcmltYXJ5IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYudGhlbWUtYWNjZW50IHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmRpdi50aGVtZS13YXJuIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDclO1xuICBsZWZ0OiAyMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnRoZW1lLWNoZWNrIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMuMmVtO1xufVxuXG4udGhlbWUtc2VsZWN0b3ItaXMtZGFyayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmluc2VydGJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/insert-dialog/insert-dialog.component */ "./src/app/shared/insert-dialog/insert-dialog.component.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");











const THEME_DARKNESS_SUFFIX = `-dark`;
let EmployeeComponent = class EmployeeComponent {
    constructor(store, empservice, dialog, toasterService, overlayContainer) {
        this.store = store;
        this.empservice = empservice;
        this.dialog = dialog;
        this.toasterService = toasterService;
        this.overlayContainer = overlayContainer;
        this.themes = [
            "deeppurple-amber",
            "indigo-pink",
            "pink-bluegrey",
            "purple-green",
        ];
        this.isThemeDark = false;
        this.displayedColumns = ['index', 'id', 'name', 'surname', 'dept', 'joindate', 'action'];
        this.showSpinner = true;
        this.setTheme('indigo-pink', false);
    }
    setTheme(theme, darkness = null) {
        if (darkness === null)
            darkness = this.isThemeDark;
        else if (this.isThemeDark === darkness) {
            if (this.activeTheme === theme)
                return;
        }
        else
            this.isThemeDark = darkness;
        this.activeTheme = theme;
        const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;
        const classList = this.overlayContainer.getContainerElement().classList;
        if (classList.contains(this.activeThemeCssClass))
            classList.replace(this.activeThemeCssClass, cssClass);
        else
            classList.add(cssClass);
        this.activeThemeCssClass = cssClass;
    }
    toggleDarkness() {
        this.setTheme(this.activeTheme, !this.isThemeDark);
    }
    set content(sort) {
        if (this.dataSource) {
            this.dataSource.sort = sort;
        }
    }
    ngOnInit() {
        this.getEmployeeDetails();
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.showSpinner = false;
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.result);
        });
    }
    openDeleteDialog(element) {
        const message = "Are you sure to delete this row ?";
        const title = "Delete Row";
        const dialogRef = this.dialog.open(src_app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], {
            minWidth: "400px",
            disableClose: true,
            data: { title: title, message: message, id: element.id }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                let successMessage = 'Record Deleted Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
    openInsertDialog() {
        const title = "Insert";
        const dialogRef = this.dialog.open(src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InsertDialogComponent"], {
            width: '250px',
            data: { title: title }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                let successMessage = 'Record Inserted Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
    openUpdateDialog(element) {
        const title = "Update";
        const dialogRef = this.dialog.open(src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InsertDialogComponent"], {
            width: '250px',
            data: { title: title, elem: element }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                let successMessage = 'Record Updated Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], EmployeeComponent.prototype, "activeThemeCssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], EmployeeComponent.prototype, "content", null);
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.scss */ "./src/app/components/employee/employee.component.scss")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.overlay {\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.286);\n  z-index: 10;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n\n:host ::ng-deep .track circle {\n  stroke-opacity: 0.3 !important;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #6ebe49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXQtc3Bpbm5lci1vdmVybGF5L0M6XFxNYWluIHRhc2tcXHBvYy10YXNrLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWF0LXNwaW5uZXItb3ZlcmxheVxcbWF0LXNwaW5uZXItb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYXQtc3Bpbm5lci1vdmVybGF5L21hdC1zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXQtc3Bpbm5lci1vdmVybGF5L21hdC1zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm92ZXJsYXl7XG4gIGhlaWdodDoxMDB2aDtcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMjg2KTtcbiAgei1pbmRleDogICAgMTA7XG4gIHRvcDogICAgICAgIDA7IFxuICBsZWZ0OiAgICAgICAwOyBcbiAgcG9zaXRpb246ICAgZml4ZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWNrIGNpcmNsZXsgICAgICAgXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzZlYmU0OTtcbn0iLCIuY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI4Nik7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmFjayBjaXJjbGUge1xuICBzdHJva2Utb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICM2ZWJlNDk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MatSpinnerOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinnerOverlayComponent", function() { return MatSpinnerOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatSpinnerOverlayComponent = class MatSpinnerOverlayComponent {
    constructor() {
        this.value = 100;
        this.diameter = 100;
        this.mode = "indeterminate";
        this.strokeWidth = 10;
        this.overlay = false;
        this.color = "primary";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "diameter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "overlay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "color", void 0);
MatSpinnerOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-spinner-overlay',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-spinner-overlay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-spinner-overlay.component.scss */ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss")).default]
    })
], MatSpinnerOverlayComponent);



/***/ }),

/***/ "./src/app/service/employee.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/employee.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeService = class EmployeeService {
    constructor(http, zone) {
        this.http = http;
        this.zone = zone;
        this.baseurlLocal = "http://localhost:3000";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/text',
                'Access-Control-Allow-Origin': '*',
                'responseType': 'text/html'
            })
        };
    }
    errorHandle(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            // Get client-side error
            if (error.error.status == 0 || error.error.status == -1) {
                errorMessage = 'Unreachable : Server connection failed';
            }
            else {
                errorMessage = error.error.message;
            }
        }
        else {
            // Get server-side error
            if (error.status == 0 || error.status == -1) {
                errorMessage = 'Unreachable : Server connection failed';
            }
            else {
                if (error.error.message && error.error.message !== "") {
                    errorMessage = `Error : ${error.error.message}`;
                }
                else {
                    errorMessage = `Error : Bad Request`;
                }
            }
        }
        //this.zone.run(() => this.toasterService.showToaster(errorMessage, 'snackbar-error'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    getEmployee() {
        return this.http.get(this.baseurlLocal + '/data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getDeleteEmployee(id) {
        return this.http.delete(this.baseurlLocal + '/data/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getInsertEmployee(parameters) {
        return this.http.post(this.baseurlLocal + '/data/', parameters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getUpdateEmployee(id, parameters) {
        return this.http.put(this.baseurlLocal + '/data/' + id, parameters, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/service/module.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/module.service.ts ***!
  \*******************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");

// import { Http } from '@angular/http';



// Needed for the new modules







let ModuleService = class ModuleService {
    constructor(compiler, http) {
        this.compiler = compiler;
        this.http = http;
        this.source = `http://${window.location.host}/`;
        console.log(compiler);
    }
    loadModules() {
        return this.http.get("./assets/modules.json");
    }
    loadModule(moduleInfo) {
        let url = this.source + moduleInfo.location;
        return this.http.get(url).
            //map(res => res.text()).
            map(source => {
            const exports = {}; // this will hold module exports
            const modules = {
                '@angular/core': _angular_core__WEBPACK_IMPORTED_MODULE_2__,
                '@angular/common': _angular_common__WEBPACK_IMPORTED_MODULE_4__,
                '@angular/router': _angular_router__WEBPACK_IMPORTED_MODULE_5__,
                '@angular/platform-browser/animations': _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__,
                '@clr/angular': _clr_angular__WEBPACK_IMPORTED_MODULE_6__,
                '@angular/material': _angular_material__WEBPACK_IMPORTED_MODULE_8__,
                '@angular/material/table': _angular_material_table__WEBPACK_IMPORTED_MODULE_9__
            };
            // shim 'require' and eval
            const require = (module) => modules[module];
            eval(source);
            // Need to check if there is another solution for eval as this is described as 'Evil'
            this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`]);
            //console.log(exports); // disabled as this object is cleared anyway
            return exports;
        });
    }
    loadModuleSystemJS(moduleInfo) {
        let url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(_angular_core__WEBPACK_IMPORTED_MODULE_2__));
        SystemJS.set('@angular/common', SystemJS.newModule(_angular_common__WEBPACK_IMPORTED_MODULE_4__));
        SystemJS.set('@angular/router', SystemJS.newModule(_angular_router__WEBPACK_IMPORTED_MODULE_5__));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__));
        SystemJS.set('@clr/angular', SystemJS.newModule(_clr_angular__WEBPACK_IMPORTED_MODULE_6__));
        SystemJS.set('@angular/material', SystemJS.newModule(_angular_material__WEBPACK_IMPORTED_MODULE_8__));
        SystemJS.set('@angular/material/table', SystemJS.newModule(_angular_material_table__WEBPACK_IMPORTED_MODULE_9__));
        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log(module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log(compiled);
                return module;
            });
        });
    }
};
ModuleService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ModuleService);



/***/ }),

/***/ "./src/app/service/router.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/router.service.ts ***!
  \*******************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let RouterService = class RouterService {
    constructor(router, compiler) {
        this.router = router;
        this.compiler = compiler;
        this.existingRoutes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.routes);
    }
    get routes() {
        var routesToReturn = this.router.config;
        return routesToReturn.filter(x => x.path !== "");
    }
    createAndRegisterRoute(moduleToRegister, exports) {
        let route = {
            path: moduleToRegister.path,
            loadChildren: () => exports[`${moduleToRegister.moduleName}`]
        };
        this.registerRoute(route);
    }
    routeIsRegistered(path) {
        return this.router.config.filter(r => r.path === path).length > 0;
    }
    registerRoute(route) {
        if (this.routeIsRegistered(route.path))
            return;
        this.router.config.push(route);
        this.updateRouteConfig(this.router.config);
    }
    unRegisterRoute(path) {
        console.log("Unregister", path);
        this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
    }
    updateRouteConfig(config) {
        this.router.resetConfig(config);
        this.existingRoutes.next(this.routes);
    }
};
RouterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"] }
];
RouterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], RouterService);



/***/ }),

/***/ "./src/app/service/toaster.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/toaster.service.ts ***!
  \********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ToasterService = class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.showToaster = (msg, panelClass) => {
            let config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
            config.verticalPosition = 'top',
                config.horizontalPosition = 'center';
            config.duration = 5000;
            if (typeof panelClass == 'string') {
                panelClass = [panelClass];
            }
            config.panelClass = panelClass,
                this.snackBar.open(msg, "CLOSE", config);
        };
    }
};
ToasterService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterService);



/***/ }),

/***/ "./src/app/shared/delete-dialog/delete-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/delete-dialog/delete-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/delete-dialog/delete-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/delete-dialog/delete-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteDialogComponent, DeleteDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogModel", function() { return DeleteDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_employee_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/employee.actions */ "./src/app/store/employee.actions.ts");









let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(store, dialogRef, data, empservice, toasterService) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.empservice = empservice;
        this.toasterService = toasterService;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
        this.id = data.id;
    }
    ngOnInit() {
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.result);
            this.dataSource.sort = this.sort;
        });
    }
    onConfirm() {
        let employeeId = this.id;
        this.store.dispatch(src_app_store_employee_actions__WEBPACK_IMPORTED_MODULE_8__["employeeActionTypes"].deleteEmployee({ employeeId }));
        this.getEmployeeDetails();
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: DeleteDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], DeleteDialogComponent.prototype, "sort", void 0);
DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-delete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/shared/delete-dialog/delete-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))
], DeleteDialogComponent);

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
class DeleteDialogModel {
    constructor(title, message, id) {
        this.title = title;
        this.message = message;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/insert-dialog/insert-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/insert-dialog/insert-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .invalid-feedback {\n  display: block !important;\n  width: 100%;\n  font-size: 10px;\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2luc2VydC1kaWFsb2cvQzpcXE1haW4gdGFza1xccG9jLXRhc2stbWFzdGVyL3NyY1xcYXBwXFxzaGFyZWRcXGluc2VydC1kaWFsb2dcXGluc2VydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9pbnNlcnQtZGlhbG9nL2luc2VydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2luc2VydC1kaWFsb2cvaW5zZXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59IiwiOjpuZy1kZWVwIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNkYzM1NDU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/insert-dialog/insert-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/insert-dialog/insert-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: InsertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertDialogComponent", function() { return InsertDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_employee_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../store/employee.actions */ "./src/app/store/employee.actions.ts");










let InsertDialogComponent = class InsertDialogComponent {
    constructor(store, dialogRef, datepipe, data, empservice, toasterService) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.datepipe = datepipe;
        this.data = data;
        this.empservice = empservice;
        this.toasterService = toasterService;
        this.isUpdate = false;
        this.isSubmit = true;
        this.isAdded = false;
        this.showSpinner = true;
        this.insertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            joindate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.title = this.data.title;
        if (this.title == "Update") {
            this.isUpdate = true;
            this.isSubmit = false;
            this.elem = this.data.elem;
            if (this.elem) {
                this.insertForm.get('name').setValue(this.elem.name);
                this.insertForm.get('surname').setValue(this.elem.surname);
                this.insertForm.get('dept').setValue(this.elem.dept);
                this.insertForm.get('joindate').setValue(this.elem.joindate);
            }
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onInsertSubmit() {
        const employee = {
            id: 0,
            name: this.insertForm.controls['name'].value,
            surname: this.insertForm.controls['surname'].value,
            dept: this.insertForm.controls['dept'].value,
            joindate: this.insertForm.controls['joindate'].value
        };
        this.store.dispatch(Object(_store_employee_actions__WEBPACK_IMPORTED_MODULE_9__["createEmployee"])({ employee }));
        this.getEmployeeDetails();
    }
    onUpdateSubmit() {
        const update = {
            id: this.elem.id,
            changes: {
                name: this.insertForm.controls['name'].value,
                surname: this.insertForm.controls['surname'].value,
                dept: this.insertForm.controls['dept'].value,
                joindate: this.insertForm.controls['joindate'].value
            }
        };
        this.store.dispatch(Object(_store_employee_actions__WEBPACK_IMPORTED_MODULE_9__["updateEmployee"])({ update }));
        this.getEmployeeDetails();
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.showSpinner = false;
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.result);
        });
    }
};
InsertDialogComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
];
InsertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insert-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insert-dialog.component.scss */ "./src/app/shared/insert-dialog/insert-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InsertDialogComponent);



/***/ }),

/***/ "./src/app/store/employee.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/store/employee.actions.ts ***!
  \*******************************************/
/*! exports provided: createEmployee, deleteEmployee, updateEmployee, employeeActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployee", function() { return updateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeActionTypes", function() { return employeeActionTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const createEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Create Employee Component] Create Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const deleteEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Employee List Operations] Delete Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const updateEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Employee List Operations] Update Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const employeeActionTypes = {
    createEmployee,
    deleteEmployee,
    updateEmployee
};


/***/ }),

/***/ "./src/app/store/employee.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/store/employee.effects.ts ***!
  \*******************************************/
/*! exports provided: EmployeeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEffects", function() { return EmployeeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _employee_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.actions */ "./src/app/store/employee.actions.ts");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let EmployeeEffects = class EmployeeEffects {
    constructor(employeeService, actions$, router) {
        this.employeeService = employeeService;
        this.actions$ = actions$;
        this.router = router;
        this.createEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].createEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getInsertEmployee(action.employee))), { dispatch: false });
        this.deleteEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].deleteEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getDeleteEmployee(action.employeeId))), { dispatch: false });
        this.updateEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].updateEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getUpdateEmployee(action.update.id, action.update.changes))), { dispatch: false });
    }
};
EmployeeEffects.ctorParameters = () => [
    { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EmployeeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], EmployeeEffects);



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/assets/form.json":
/*!******************************!*\
  !*** ./src/assets/form.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"propertyID\":\"1\",\"propertyLabel\":\"Button\",\"uiElementType\":\"button\",\"dataEnum\":[],\"defaultValue\":\"Start\",\"placeholder\":\"\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"2\",\"propertyLabel\":\"Working Shifts\",\"uiElementType\":\"buttonGroup\",\"dataEnum\":[\"First\",\"Second\",\"Third\"],\"defaultValue\":\"\",\"placeholder\":\"\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"3\",\"propertyLabel\":\"Vechical Avialable\",\"uiElementType\":\"checkbox\",\"dataEnum\":[],\"defaultValue\":\"\",\"placeholder\":\"Yes\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"4\",\"propertyLabel\":\"Joining of Date\",\"uiElementType\":\"datetime\",\"dataEnum\":[],\"defaultValue\":\"\",\"placeholder\":\"Date 1\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"5\",\"propertyLabel\":\"Radio\",\"uiElementType\":\"radio\",\"dataEnum\":[],\"defaultValue\":\"Radio 1\",\"placeholder\":\"Radio 1\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":true,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"6\",\"propertyLabel\":\"Education\",\"uiElementType\":\"select\",\"dataEnum\":[\"Under Graduate\",\"Graduate\",\"Post Graduate\"],\"defaultValue\":\"\",\"placeholder\":\"Education\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"7\",\"propertyLabel\":\"Profile Completeness\",\"uiElementType\":\"slider\",\"dataEnum\":[],\"defaultValue\":\"\",\"placeholder\":\"Slider 1\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"8\",\"propertyLabel\":\"Address\",\"uiElementType\":\"text\",\"dataEnum\":[],\"defaultValue\":\"\",\"placeholder\":\"Address\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":true,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"},{\"propertyID\":\"9\",\"propertyLabel\":\"Job Type\",\"uiElementType\":\"autocomplete\",\"dataEnum\":[\"Full Time\",\"Part Time\",\"Visiting Faculty\"],\"defaultValue\":\"\",\"placeholder\":\"Auto Complete 1\",\"helpertext\":\"\",\"multiline\":false,\"onChange\":\"onChangeEvent\",\"required\":false,\"validationHook\":\"validationHookEvent\",\"derivesForm\":\"\"}]");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Main task\poc-task-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map