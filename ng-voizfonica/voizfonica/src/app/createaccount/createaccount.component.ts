import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
;
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  // onlineusers =[];
  // selected_ou={name:'',phone_num:'',pw:'',retype_pw:''};

  count=0;

  var1="hi";
  isBtnClicked=false;

  name_var:string;
  user_name_var:string;
  phone_num_var:string;
  aadhar_var:string;
  aadhar_var_short:string;
  pw_var:string;
  retype_pw_var:string;

  customer={aadhar:'',aadhar_verified:false};

  regForm_frontend_val=false;

  isCustomer=true;
  isAlreadyPresent:boolean;
  aadharMatches:boolean;
  aadharVerified:boolean;
  userNameTaken:boolean;

  constructor(private apiService:ApiService,
    private router:Router) {
      console.log(apiService.getVal());
      this.apiService.changeVal(2);
      console.log(apiService.getVal());
    }

  ngOnInit() {
    // this.apiService.getOnlineUsers().subscribe(data=>(this.onlineusers=data));    
  }

  check()
  {
    this.isBtnClicked=true;

    var reg=new RegExp('^[0-9]{4}\\ [0-9]{4}\\ [0-9]{4}$');
    this.aadhar_var_short=this.aadhar_var;
    if(reg.test(this.aadhar_var_short))
    {
      this.aadhar_var_short=this.aadhar_var_short.substring(0,4)+this.aadhar_var_short.substring(5,9)+this.aadhar_var_short.substring(10,14);
    }

    this.apiService.checkIsCustomer(this.phone_num_var).subscribe(
      data=>(this.isCustomer=true,this.customer=data,this.check1()),
      error=>(this.isCustomer=false)
      );

    return true;
  }

  check1()
  {
    this.apiService.checkUserPresent(this.phone_num_var).subscribe(
      data=>(this.isAlreadyPresent=true),
      error=>(this.isAlreadyPresent=false,this.check2())
      );
  }

  check2()
  {
    if(this.aadhar_var_short==this.customer.aadhar)
      this.aadharMatches=true;
    else
      this.aadharMatches=false;

    this.aadharVerified=this.customer.aadhar_verified;

    if(this.aadharMatches && this.aadharVerified)
      this.check3();
  }

  check3()
  {
    this.apiService.checkUserNamePresent(this.user_name_var).subscribe(
      data=>(this.userNameTaken=true),
      error=>(this.userNameTaken=false,this.save())
      );
  }

  save(){
    this.apiService.createNewUser(this.name_var,this.user_name_var,this.phone_num_var,this.pw_var).subscribe(data=>(true));
    //this.router.navigate(['/login']);
  }

  // select(id)
  // {
  //   this.apiService.getOnlineUserDetails(id).subscribe(data=>(this.selected_ou=data));    
  // }

  // create(ou)
  // {
  //   this.apiService.createOnlineUser(ou).subscribe(data=>(this.onlineusers.push(data),this.selected_ou=data));    
  // }

  // update(ou)
  // {
  //   this.apiService.updateOnlineUser(ou).subscribe(data=>(this.onlineusers[this.onlineusers.map(function(x){return x.id;}).indexOf(data.id)]=data));
  //   // It is easier to create a getOnlineUsers() function in this file and call it.
  // }

  // delete(id)
  // {
  //   this.apiService.deleteOnlineUser(id).subscribe(data=>(this.onlineusers.splice(this.onlineusers.map(function(x){return x.id;}).indexOf(id),1),this.selected_ou={name:'',phone_num:'',pw:'',retype_pw:''}));
  // }
  
  name_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[a-zA-Z\ ]+$');
      var name_val=reg.test(str); 
      return name_val;
    }
    return true;
  }

  user_name_start(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[a-zA-Z]');
      var user_name_val=reg.test(str); 
      return user_name_val;
    }
    return true;
  }

  user_name_space(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('\ ');
      var user_name_val=reg.test(str); 
      return !user_name_val;
    }
    return true;
  }
  
  user_name_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[a-zA-Z0-9|\*|#|\\-|_|\ ]+$');
      var user_name_val=reg.test(str); 
      return user_name_val;
    }
    return true;
  }

  phone_num_match(num):boolean
  {
    if(num!=null)
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[6-9][0-9]{9}$');
      var phone_num_val=reg.test(str); 
      return phone_num_val;
    }
    return true;
  }

  pw_match(num):boolean
  {
    if(num!=null && num!='')
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[a-zA-Z0-9]{8,15}$');
      return reg.test(str);
    }
    return true;
  }

  aadhar_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[0-9]{4}\\ [0-9]{4}\\ [0-9]{4}$');
      var reg1=new RegExp('^[0-9]{12}$');
      return reg.test(str)||reg1.test(str);
    }
    return true;
  }


  frontend_valid()
  {
    if(this.name_var!=null && this.name_var!=''
    && this.user_name_var!=null && this.user_name_var!=''
    && this.phone_num_var!=null && this.phone_num_var!=''
    && this.aadhar_var!=null && this.aadhar_var!=''
    && this.pw_var!=null && this.pw_var!=''
    && this.retype_pw_var!=null && this.retype_pw_var!=''
    && this.name_match(this.name_var) 
    && this.user_name_start(this.user_name_var) && this.user_name_space(this.user_name_var) && this.user_name_match(this.user_name_var)
    && this.phone_num_match(this.phone_num_var) 
    && this.aadhar_match(this.aadhar_var) 
    && this.pw_var==this.retype_pw_var)
      this.regForm_frontend_val=true;
    else
      this.regForm_frontend_val=false;

    return true;
  }

  regForm_valid():boolean
  {    
    if(this.name_var!=null && this.name_var!=''
    && this.user_name_var!=null && this.user_name_var!=''
    && this.phone_num_var!=null && this.phone_num_var!=''
    && this.aadhar_var!=null && this.aadhar_var!=''
    && this.pw_var!=null && this.pw_var!=''
    && this.retype_pw_var!=null && this.retype_pw_var!=''
    && this.name_match(this.name_var) 
    && this.user_name_start(this.user_name_var) && this.user_name_space(this.user_name_var) && this.user_name_match(this.user_name_var)
    && this.phone_num_match(this.phone_num_var) 
    && this.aadhar_match(this.aadhar_var) 
    && this.pw_var==this.retype_pw_var
    && this.isCustomer
    && !this.isAlreadyPresent
    && this.aadharMatches && this.aadharVerified
    && !this.userNameTaken)
      return true;
    else
      return false;
  }

}
