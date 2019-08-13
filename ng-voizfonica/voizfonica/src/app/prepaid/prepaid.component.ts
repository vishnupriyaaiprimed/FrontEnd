import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {

  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); console.log(this.num);
  }

  ngOnInit() {
  }

}
