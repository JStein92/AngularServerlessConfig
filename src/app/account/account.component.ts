import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
public page = 'account';
public selectedOption = 'billing';
  constructor() { }

  ngOnInit() {
  }

  selectOption(option) {
    this.selectedOption = option;
  }
}
