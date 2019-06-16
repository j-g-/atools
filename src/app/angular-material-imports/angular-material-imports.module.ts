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
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatTooltipModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule
  ],
  exports: [
    MatTooltipModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule
  ]
})
export class AngularMaterialImportsModule { }
