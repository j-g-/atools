import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentInfoEditorComponent } from './agent-info-editor/agent-info-editor.component';
import { AngularMaterialImportsModule } from '../angular-material-imports/angular-material-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgentInfoEditorComponent],
  imports: [
    CommonModule,
    AngularMaterialImportsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    AgentInfoEditorComponent
  ]
})
export class AgentInfoModule { }
