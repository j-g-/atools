import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackEditorComponent } from './callback-editor/callback-editor.component';
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';

@NgModule({
  declarations: [CallbackEditorComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule
  ],
  exports: [
    CallbackEditorComponent
  ]
})
export class CallbackDetailsModule { }
