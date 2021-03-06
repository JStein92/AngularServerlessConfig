import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  public paymentType = 'check';
  public selectedAccount = 'checking';
  constructor() { }

  ngOnInit() {
    this.selectedAccount = 'checking';
    this.paymentType = 'check';
  }

  radioChange(paymentType) {
    this.paymentType = paymentType;
  }

}
