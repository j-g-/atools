import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackEditorComponent } from './callback-editor/callback-editor.component';
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeRangePickerModule } from '../time-range-picker/time-range-picker.module';

@NgModule({
  declarations: [CallbackEditorComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule,
    BrowserModule,
    FormsModule,
    TimeRangePickerModule,
    ReactiveFormsModule
  ],
  exports: [
    CallbackEditorComponent
  ]
})
export class CallbackDetailsModule { }
