import { Component, OnInit } from '@angular/core';
import { Countries } from '../common/countries';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
  providers: [Countries]
})
export class BillingInfoComponent implements OnInit {
  public countryList: Array<any>;

  constructor(private countries: Countries) {
    this.countryList = countries.country_list;
   }

  ngOnInit() {
  }

}
