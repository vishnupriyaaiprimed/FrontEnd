import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
home=true;
about=false;
contact=false;
  constructor() { }

  ngOnInit() {
  }

  changeContent(s)
  {
    if(s=='home')
    {
      this.home=true;
      this.about=this.contact=false;
    }
    else if(s=='about')
    {
      this.about=true;
      this.home=this.contact=false;
    }
    else
    {
      this.contact=true;
      this.about=this.home=false;
    }
  }
  

}
