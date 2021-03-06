import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulea.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModuleaService {
    constructor() { }
}
ModuleaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModuleaService.ctorParameters = () => [];
/** @nocollapse */ ModuleaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModuleaComponent {
    constructor() {
        this.columnHeader = { 'studentID1': 'Student ID', 'fname1': 'First Name', 'weight1': 'Weight', 'symbol1': 'Symbol' };
        this.tableData = [
            { studentID1: 1, fname1: 'Hydrogen', weight1: 1.0079, symbol1: 'H' },
            { studentID1: 2, fname1: 'Helium', weight1: 4.0026, symbol1: 'He' },
            { studentID1: 3, fname1: 'Lithium', weight1: 6.941, symbol1: 'Li' },
            { studentID1: 4, fname1: 'Beryllium', weight1: 9.0122, symbol1: 'Be' },
            { studentID1: 5, fname1: 'Boron', weight1: 10.811, symbol1: 'B' },
            { studentID1: 6, fname1: 'Carbon', weight1: 12.0107, symbol1: 'C' },
            { studentID1: 7, fname1: 'Nitrogen', weight1: 14.0067, symbol1: 'N' },
            { studentID1: 8, fname1: 'Oxygen', weight1: 15.9994, symbol1: 'O' },
            { studentID1: 9, fname1: 'Fluorine', weight1: 18.9984, symbol1: 'F' },
            { studentID1: 10, fname1: 'Neon', weight1: 20.1797, symbol1: 'Ne' },
        ];
        this.objectKeys = Object.keys;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tableData);
    }
}
ModuleaComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-module-custom-mat-grid',
                template: `
  <h2>Dynamic Module Works -</h2>
  <table style="width:100%" mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <ng-container [matColumnDef]="tableData" *ngFor="let tableData of objectKeys(columnHeader)">
    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>
    <td mat-cell *matCellDef="let element"> {{element[tableData] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="objectKeys(columnHeader)"></tr>
  <tr mat-row *matRowDef="let row; columns: objectKeys(columnHeader);"></tr>
</table>
  `
            }] }
];
/** @nocollapse */
ModuleaComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ModuleaComponent.prototype.columnHeader;
    /** @type {?} */
    ModuleaComponent.prototype.tableData;
    /** @type {?} */
    ModuleaComponent.prototype.objectKeys;
    /** @type {?} */
    ModuleaComponent.prototype.dataSource;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulea.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModuleaModule {
}
ModuleaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModuleaComponent],
                imports: [
                    RouterModule.forChild([
                        {
                            path: '', pathMatch: 'full', component: ModuleaComponent
                        }
                    ]), MatTableModule, CommonModule
                ],
                exports: [ModuleaComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modulea.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModuleaComponent, ModuleaModule, ModuleaService };
//# sourceMappingURL=modulea.js.map
