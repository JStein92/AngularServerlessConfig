import { Component } from '@angular/core';
import { Countries } from '../common/countries';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  providers: [ Countries ]
})
export class JoinComponent {

  constructor() {

   }


}
