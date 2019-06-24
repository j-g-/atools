import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeRangePickerComponent } from "./time-range-picker.component";
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';

@NgModule({
  declarations: [TimeRangePickerComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule
  ],exports: [
    TimeRangePickerComponent
  ]
})
export class TimeRangePickerModule { }
