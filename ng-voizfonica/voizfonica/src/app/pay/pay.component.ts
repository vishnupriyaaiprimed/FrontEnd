import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
  
})
export class PayComponent implements OnInit {
  mode_var: string;
  modes = ["Credit Card", "Net Banking"];
  bank_var: string;
  banks = ["Axis Bank", "SBI Bank"];
  card_var: string;
  cvv_var: string;
  pin_var: string;
  acc_var: string;
  pass_var:string;

  amt:string;
  page: string;
  num: string;
  bill: any;
  det: any;
  plan:any;
  plan1:any;
  duration:string;
  balance:string;

  credit : any;
  bank : any;

  creditcard_valid=true;
  cvv_valid=true;
  pin_valid=true;
  bal_valid=true;

  acc_valid=true;
  pw_valid=true;
  

  isBtnClicked = false;

  constructor(private apiService:ApiService) { 
    this.amt = this.apiService.getAmt();
    if(this.amt.includes("Rs."))
      this.amt=this.amt.substring(3);
    console.log(this.amt);
    this.page = this.apiService.getPage();
    //console.log(this.page);
    this.num = this.apiService.getNum();
    //console.log(this.num);
    console.log(this.apiService.getPlan1());
    this.apiService.checkIsCustomer(this.num).subscribe(response => {
      this.bill = response.bill;
      this.det = response;
    });
    this.plan1 = this.apiService.getPlan1();
    this.duration=this.apiService.getDuration();
  }

  change() {
    if (this.page == "billpay") {
      
        this.bill = this.bill.substring(0, 77) + "p" + this.bill.substring(78);
        this.apiService
          .updateCustomersBill(this.det, this.bill)
          .subscribe(res => (console.log(res),    this.apiService.changeAmt('0')));
          
        // console.log(this.bill);
      
    }
    else if(this.page=='newcon')
    {
      this.det=this.apiService.getDet();
      console.log(this.det);
      
      //this.apiService.addToCustomers(this.det).subscribe(data=>(true));
      this.apiService.changeAmt('0');
    }
    else if(this.page=='plans')
    {
      this.update();
      this.apiService.changePlan("0");
      this.apiService.changeAmt('0');
    }
    else if(this.page=='recharge')
    {
      this.balance = parseFloat(this.det.balance)+parseFloat(this.amt);
      console.log(this.balance);
      
      this.apiService.updateCustomerBal(this.det,this.balance ).subscribe(res => (console.log(res),    this.apiService.changeAmt('0')))
    
    }

  }


  ngOnInit() {
  }

  card_match(num): boolean {
    if (num != null && num!='') {
      var str: string;
      str = num;
      var reg = new RegExp('^([4-6][0-9]{3})\\-([0-9]{4})\\-([0-9]{4})\\-([0-9]{4})$');
      var reg1 = new RegExp('^([4-6][0-9]{3})([0-9]{4})([0-9]{4})([0-9]{4})$');
      return reg.test(str) || reg1.test(str);
    }
    return true;
  }

  cvv_match(num): boolean {
    if (num != null && num != '') {
      var str: string;
      str = num;
      var reg = new RegExp('^[0-9]{3}$');
      return reg.test(str);
    }
    return true;
  }

  pin_match(num): boolean {
    if (num != null && num != '') {
      var str: string;
      str = num;
      var reg = new RegExp('^[0-9]{4}$');
      return reg.test(str);
    }
    return true;
  }

  acc_match(num): boolean {
    if (num != null && num != '') {
      var str: string;
      str = num;
      var reg = new RegExp('^[0-9]{12}$');
      return reg.test(str);
    }
    return true;
  }

  click()
  {
    this.isBtnClicked=true;
    this.creditcard_valid=true;
    this.cvv_valid=true;
    this.pin_valid=true;
    this.bal_valid=true;

    this.acc_valid=true;
    this.pw_valid=true;

    this.check_valid();
    
  }

  update() {
    console.log(this.plan);
    console.log(this.det);

    this.apiService
      .updateCustomerPack(this.det, this.plan1,this.duration   )
      .subscribe(res => console.log(res));
  }


  check_valid() {
       
    if (this.mode_var == 'Credit Card') {
      if (this.card_var != null && this.card_var != ''
        && this.cvv_var != null && this.cvv_var != ''
        && this.pin_var != null && this.pin_var != ''
        && this.card_match(this.card_var)
        && this.cvv_match(this.cvv_var)
        && this.pin_match(this.pin_var))
        {
        this.access_credit();
        return true;
        }
      else
        return false;
    }
    else if(this.mode_var=='Net Banking') {
      if (this.bank_var!=null && this.bank_var!=''
        && this.acc_var != null && this.acc_var != ''
        && this.pass_var != null && this.pass_var != ''
        && this.acc_match(this.acc_var))
        {
        this.access_bank();
        return true;
        }
      else
        return false;
    }
    else 
      return false;
  }

  frontend_valid() {
       
    if (this.mode_var == 'Credit Card') {
      if (this.card_var != null && this.card_var != ''
        && this.cvv_var != null && this.cvv_var != ''
        && this.pin_var != null && this.pin_var != ''
        && this.card_match(this.card_var)
        && this.cvv_match(this.cvv_var)
        && this.pin_match(this.pin_var))
        {
        return true;
        }
      else
        return false;
    }
    else if(this.mode_var=='Net Banking') {
      if (this.bank_var!=null && this.bank_var!=''
        && this.acc_var != null && this.acc_var != ''
        && this.pass_var != null && this.pass_var != ''
        && this.acc_match(this.acc_var))
        {
        return true;
        }
      else
        return false;
    }
    else 
      return false;
  }

  backend_valid()
  {
    if(this.frontend_valid())
    {
      if (this.mode_var == 'Credit Card') {
        if(this.creditcard_valid && this.cvv_valid && this.pin_valid && this.bal_valid)
          return true;
        else
          return false;
      }
      else if(this.mode_var=='Net Banking') {
        if(this.acc_valid && this.pw_valid && this.bal_valid)
          return true;
        else
          return false;
      }
            
    }
    else{
      return false;
    }
  }
  access_credit()
  {
    var c=this.card_var;
    var reg = new RegExp('^([4-6][0-9]{3})\\-([0-9]{4})\\-([0-9]{4})\\-([0-9]{4})$');
    if(reg.test(this.card_var))
      c=this.card_var.substring(0,4)+this.card_var.substring(5,9)+this.card_var.substring(10,14)+this.card_var.substring(15,19);

    this.apiService.getCredit(c).subscribe(
      data=>(this.credit=data,this.creditcard_valid=true,this.checkcvv()),
      error=>(this.creditcard_valid=false)
    );
  }

  checkcvv()
  {
    if(this.cvv_var==this.credit.cvv)
    {
      this.cvv_valid=true;
      this.checkpin();
    }
    else
      this.cvv_valid=false;
  }

  checkpin()
  {
    if(this.pin_var==this.credit.pinnumber)
    {
      this.pin_valid=true;
      this.checkbal();
    }
    else
      this.pin_valid=false;
  }
  
  checkbal()
  {
    if(this.mode_var=="Credit Card")
    {   
      
      if(parseFloat(this.amt)<=parseFloat(this.credit.balance))
      {
        this.bal_valid=true;
        this.apiService.changeCredit(this.credit.id,this.credit.cardnumber,this.credit.cvv,this.credit.pinnumber,parseFloat(this.credit.balance)-parseFloat(this.amt)).subscribe(data=>this.change());
      
      }
      else
        this.bal_valid=false;
    }
    else if(this.mode_var=="Net Banking")
    {
      var b;
      if(this.bank_var=="Axis Bank")
        b="bankaxis";
      else
        b="banksbi";

      if(parseFloat(this.amt)<=parseFloat(this.bank.balance))
      {
        this.bal_valid=true;
        this.apiService.changeBank(b,this.bank.id,this.bank.accountnumber,this.bank.password,parseFloat(this.bank.balance)-parseFloat(this.amt)).subscribe(data=>this.change())
      }
      else
        this.bal_valid=false;
    }
  }

  access_bank()
  {
    var b;
    if(this.bank_var=="Axis Bank")
      b="bankaxis";
    else
      b="banksbi";

    this.apiService.getBank(b,this.acc_var).subscribe(
      data=>(this.acc_valid=true,this.bank=data,this.checkpw()),
      error=>(this.acc_valid=false)
    );
    
  }

  checkpw()
  {
    if(this.pass_var==this.bank.password)
    {
      this.pw_valid=true;
      this.checkbal();
    }
    else
      this.pw_valid=false;
  }

}
