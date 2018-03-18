import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {AccountComponent} from './account.component';
import { NavbarModule } from '../navbar/navbar.module';
import { BillingInfoModule } from '../billing-info/billing-info.module';
import { PaymentMethodModule } from '../payment-method/payment-method.module';
import {MatTabsModule} from '@angular/material/tabs';
import { StopPaymentModule } from '../stop-payment/stop-payment.module';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    NavbarModule,
    BillingInfoModule,
    PaymentMethodModule,
    MatTabsModule,
    StopPaymentModule,
    MatSelectModule
  ],
  declarations: [ AccountComponent ],
  exports: [ AccountComponent ]
})
export class AccountModule { }
