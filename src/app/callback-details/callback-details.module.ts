import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CallbackEditorComponent } from './callback-editor/callback-editor.component';
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeRangePickerModule } from '../time-range-picker/time-range-picker.module';
import { CallbacksBoardComponent } from './callbacks-board/callbacks-board.component';
import { ReminderCardComponent } from './reminder-card/reminder-card.component';

@NgModule({
  declarations: [CallbackEditorComponent, CallbacksBoardComponent, ReminderCardComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule,
    BrowserModule,
    FormsModule,
    TimeRangePickerModule,
    ReactiveFormsModule
  ],
  exports: [
    CallbackEditorComponent,
    CallbacksBoardComponent
  ],
  providers: [DatePipe]
  
})
export class CallbackDetailsModule { }
