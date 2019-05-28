import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteSummaryComponent } from './note-summary/note-summary.component';
import { AngularMaterialImportsModule } from "../angular-material-imports/angular-material-imports.module";

@NgModule({
  declarations: [NoteSummaryComponent],
  imports: [
    AngularMaterialImportsModule,
    CommonModule
  ],
  exports: [NoteSummaryComponent]
})
export class InteractionNotesModule { }
