import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { RechargeComponent } from './recharge/recharge.component';
import { BillpayComponent } from './billpay/billpay.component';
import { PayComponent } from './pay/pay.component';
import { NewconComponent } from './newcon/newcon.component';
import { BillinquiryComponent } from './billinquiry/billinquiry.component';
import { ReportComponent } from './report/report.component';
import { FaqComponent } from './faq/faq.component';
import { RorbComponent } from './rorb/rorb.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { Home1Component } from './home1/home1.component';
import { DongleComponent } from './dongle/dongle.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { Plans2Component } from './plans2/plans2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlansComponent,
    PrepaidComponent,
    PostpaidComponent,
    CreateaccountComponent,
    RechargeComponent,
    BillpayComponent,
    PayComponent,
    NewconComponent,
    BillinquiryComponent,
    ReportComponent,
    FaqComponent,
    RorbComponent,
    Home1Component,
    DongleComponent,
    //PagenotfoundComponent,
    // Plans2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
