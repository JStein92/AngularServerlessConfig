import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarModule } from '../navbar/navbar.module';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatRadioChange } from '@angular/material';
import { BillingInfoModule } from '../billing-info/billing-info.module';
import { PaymentMethodModule } from '../payment-method/payment-method.module';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    NavbarModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    BillingInfoModule,
    PaymentMethodModule
  ],
  declarations: [ JoinComponent ],
  exports: [ JoinComponent ]
})
export class JoinModule { }
