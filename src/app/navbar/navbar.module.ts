import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    Ng2PageScrollModule,
    MatButtonToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
