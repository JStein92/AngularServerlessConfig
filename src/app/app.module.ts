import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { MeetupModule } from './meetup/meetup.module';
import { HelpedModule } from './helped/helped.module';
import { JoinModule } from './join/join.module';
import {AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { BillingInfoModule } from './billing-info/billing-info.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { AccountModule } from './account/account.module';
import { StopPaymentModule } from './stop-payment/stop-payment.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    NavbarModule,
    MeetupModule,
    HelpedModule,
    AppRoutingModule,
    JoinModule,
    BillingInfoModule,
    PaymentMethodModule,
    AccountModule,
    StopPaymentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
