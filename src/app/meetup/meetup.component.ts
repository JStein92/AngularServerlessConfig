import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {
  positions: Array<any> = [];
  city = 'Seattle, WA';

  constructor() {
  }

  ngOnInit() {
    this.positions.push([47.576728, -122.334702]);
  }

  showInfoWindow(info) {
    window.open('https://www.google.com/maps/search/seattle+wa/', '_blank');
  }

}
