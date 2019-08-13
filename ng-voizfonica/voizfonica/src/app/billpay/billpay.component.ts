import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-billpay',
  templateUrl: './billpay.component.html',
  styleUrls: ['./billpay.component.css']
})
export class BillpayComponent implements OnInit {
  
  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }
  

  ngOnInit() {
  }

}
