import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private companyName = environment.companyName;
  private nextMeetingOffsetTop: number;
  private helpedOffsetTop: number;

  @ViewChild('nextMeeting') nextMeetingPos;
  @ViewChild('helped') helpedPos;

  constructor() { }

  ngOnInit() {
    this.setOffsets();
  }

  onResize(event) {
    this.setOffsets();
  }

  private setOffsets() {
    this.nextMeetingOffsetTop = this.nextMeetingPos.nativeElement.offsetTop;
    this.helpedOffsetTop = this.helpedPos.nativeElement.offsetTop;
  }

}
