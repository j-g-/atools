import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 

@NgModule({
  declarations: [],
  imports: [
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    CommonModule
  ]
})
export class AngularMaterialImportsModule { }
