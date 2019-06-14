import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteSummaryComponent } from './note-summary/note-summary.component';
import { AngularMaterialImportsModule } from "../angular-material-imports/angular-material-imports.module";
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NoteSummaryComponent, NoteEditorComponent],
  imports: [
    AngularMaterialImportsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteSummaryComponent,
    NoteEditorComponent
  ]
})
export class InteractionNotesModule { }
