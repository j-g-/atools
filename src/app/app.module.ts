import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteEditorComponent } from './interaction-notes/note-editor/note-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CallbackEditorComponent } from './callback-details/callback-editor/callback-editor.component'; 
import { SaleEditorComponent } from './sale-details/sale-editor/sale-editor.component'; 
import { AngularMaterialImportsModule } from "./angular-material-imports/angular-material-imports.module";
import { InteractionNotesModule } from "./interaction-notes/interaction-notes.module";
import { CallbackDetailsModule } from './callback-details/callback-details.module';
//import { MatIcon } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    SaleEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialImportsModule,
    InteractionNotesModule,
    CallbackDetailsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
