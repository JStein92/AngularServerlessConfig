import { Component, OnInit } from '@angular/core';
import { Helped } from './helped';

@Component({
  selector: 'app-helped',
  templateUrl: './helped.component.html',
  styleUrls: ['./helped.component.scss'],
  providers: [Helped]
})
export class HelpedComponent implements OnInit {
  public helpedList: Array<any>;
  constructor(private helped: Helped) {
      this.helpedList = helped.helpedList;
   }

  ngOnInit() {
  }

}
