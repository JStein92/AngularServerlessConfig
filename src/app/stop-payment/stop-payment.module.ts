import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StopPaymentComponent } from './stop-payment.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [ StopPaymentComponent ],
  exports: [ StopPaymentComponent ]
})
export class StopPaymentModule { }
