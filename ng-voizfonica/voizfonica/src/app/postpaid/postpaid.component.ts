import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

  num: string;
  cus: any;
  arrayCall = [];
  arrayData = [];
  arraySms = [];
  constructor(private apiService:ApiService) {
    this.num = this.apiService.getNum();
    this.apiService.checkIsCustomer(this.num).subscribe(data => {
      this.cus = data;
      console.log(this.cus);
      this.arrayCall = this.cus.callUsage.split(";");
      console.log(this.arrayCall);

      this.arrayData = this.cus.dataUsage.split(";");
      this.arraySms = this.cus.smsUsage.split(";");
    });
   }

  ngOnInit() {
  }

}
