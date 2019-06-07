import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleEditorComponent } from './sale-editor/sale-editor.component';
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';

@NgModule({
  declarations: [SaleEditorComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule
  ], exports: [
    SaleEditorComponent
  ]
})
export class SaleDetailsModule { }
