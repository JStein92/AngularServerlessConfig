import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupComponent } from './meetup.component';
import { NguiMapModule} from '@ngui/map';
@NgModule({
  imports: [
    CommonModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC8UlQ4Vr8ls7wptEsq2mkIY0g5oPt9Z6g'})
  ],
  declarations: [ MeetupComponent ],
  exports: [ MeetupComponent ]
})
export class MeetupModule { }
