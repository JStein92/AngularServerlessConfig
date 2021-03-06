import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentMethodComponent } from './payment-method.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarModule } from '../navbar/navbar.module';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatRadioChange } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    NavbarModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [ PaymentMethodComponent ],
  exports: [ PaymentMethodComponent ]
})
export class PaymentMethodModule { }
