import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { companyName } from '../common/STRINGRESOURCE';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public companyName = companyName;
  public nextMeetingOffsetTop: number;
  public helpedOffsetTop: number;

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
