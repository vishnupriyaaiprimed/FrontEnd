import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voizfonica';
  vertical=['My Account','Plans Available','Recharge/Bill Payment','Get a new Connection','Help & Support'];
  horizontal=['Home','About Us','Contact Us'];

  num='0';

  constructor(private router:Router,
    private apiService:ApiService){
      this.num=this.apiService.getNum();      
  }

  fn(){
    var s=this.router.url.toString().split("/");
    if(s[1]=="")
    return true;
    else
    return false;
  }

  liveNum()
  {
    this.num=this.apiService.getNum();      
    return true;
  }

  logout()
  {
    this.apiService.logout();
  }
}
