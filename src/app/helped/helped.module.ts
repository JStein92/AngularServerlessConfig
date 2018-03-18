import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpedComponent } from './helped.component';
import { MatButtonModule} from '@angular/material/button';
import { NgMasonryGridModule } from 'ng-masonry-grid'; @NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NgMasonryGridModule
  ],
  declarations: [ HelpedComponent ],
  exports: [ HelpedComponent ]
})
export class HelpedModule { }
