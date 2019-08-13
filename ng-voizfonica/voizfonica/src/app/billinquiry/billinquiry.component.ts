import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-billinquiry',
  templateUrl: './billinquiry.component.html',
  styleUrls: ['./billinquiry.component.css']
})
export class BillinquiryComponent implements OnInit {
  bill_details: any[];
  bill: any;
  var1: string;
  var2: string;
  number: string;
  result: any;
  pay: string;
  det: any;

  constructor(private apiService: ApiService) { 
    this.number = this.apiService.getNum();
    this.apiService.checkIsCustomer(this.number).subscribe(response => {
      this.bill = response.bill.split(";");
      this.det = response;
      console.log(this.bill[0]);
      console.log(this.bill[0].substring(77, 78));
    });
   }

  ngOnInit() {
    /*comment1*/
  }

  func(var1) {
    console.log("this is function");
    console.log(var1);
    this.result = this.bill[var1];
    console.log(this.bill[var1]);
    this.apiService.changePage("billpay");
  }
  paymentVar(var2) {
    this.apiService.changeAmt(var2);
    console.log(var2);
  }
 

}
