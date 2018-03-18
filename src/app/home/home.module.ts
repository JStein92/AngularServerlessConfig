import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeComponent } from './home.component';
import { MeetupModule } from '../meetup/meetup.module';
import { AboutModule } from '../about/about.module';
import { MatButtonModule} from '@angular/material/button';
import { HelpedModule } from '../helped/helped.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    MeetupModule,
    AboutModule,
    MatButtonModule,
    HelpedModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
