import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs=[];

  constructor(private apiService:ApiService) {
    this.apiService.getFaqs().subscribe(data=>(this.faqs=data,console.log(this.faqs))
    );
   }

  ngOnInit() {
  }

}
