import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CallbackEditorComponent } from './callback-editor/callback-editor.component'; 
import { SaleEditorComponent } from './sale-editor/sale-editor.component'; 
import { AngularMaterialImportsModule } from "./angular-material-imports/angular-material-imports.module";
import { InteractionNotesModule } from "./interaction-notes/interaction-notes.module";
//import { MatIcon } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    CallbackEditorComponent,
    SaleEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialImportsModule,
    InteractionNotesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
