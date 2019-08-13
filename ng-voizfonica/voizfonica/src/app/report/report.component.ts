import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  complaint_var:string;


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    
  }
  register()
  {
    this.apiService.postComplaint(this.complaint_var).subscribe(data=>(true));
  }

}
