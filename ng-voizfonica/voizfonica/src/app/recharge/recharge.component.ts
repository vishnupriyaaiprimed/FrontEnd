import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  number: string;
  amount: number;

  constructor(private apiService:ApiService) {
    this.number = this.apiService.getNum();
   }

   func() {
    this.apiService.changeAmt(this.amount);
    this.apiService.changePage("recharge");
    console.log(this.amount);
  }

  ngOnInit() {
  }

}
