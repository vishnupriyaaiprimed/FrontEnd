import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  val=0;
  changeVal(v)
  {
    this.val=v;  
  }
  getVal()
  {
    return this.val;
  }

  private num='0';
  getNum()
  {
    // console.log(localStorage.getItem("num"));
    return localStorage.getItem("num");
  }
  changeNum(n)
  {
    this.num=n;
    localStorage.setItem("num",this.num);
    // console.log(localStorage.getItem("num"));
  }
  


  private typeOfCustomer='';
  getType()
  {
    // console.log(localStorage.getItem("typeOfCustomer"));
    return localStorage.getItem("typeOfCustomer");
  }
  changeType(t)
  {
    this.typeOfCustomer=t;
    localStorage.setItem("typeOfCustomer",this.typeOfCustomer);
    // console.log(localStorage.getItem("typeOfCustomer"));
  }


  private amt='0';
  getAmt()
  {
    // console.log(localStorage.getItem("amt"));
    return localStorage.getItem("amt");
  }
  changeAmt(a)
  {
    this.amt=a;
    localStorage.setItem("amt",this.amt);
    // console.log(localStorage.getItem("amt"));
  }


  private prevpage='';
  getPage()
  {
    // console.log(localStorage.getItem("prevpage"));
    return localStorage.getItem("prevpage");
  }
  changePage(p)
  {
    this.prevpage=p;
    localStorage.setItem("prevpage",this.prevpage);
    // console.log(localStorage.getItem("prevpage"));
  }


  logout()
  {
    this.num='0';
    this.typeOfCustomer='';
    localStorage.setItem("num",this.num);
    // console.log(localStorage.getItem("num"));
    localStorage.setItem("typeOfCustomer",this.typeOfCustomer);
    // console.log(localStorage.getItem("typeOfCustomer"));
  }


  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { 
}

  createNewUser(n, un, pn, pw): Observable<any> {
    const details = { username: pn, password: pw, first_name: n, last_name: un, email:pw+'@kk.in'};
    return this.http.post<any>(this.baseUrl + 'users/', details,
      { headers: this.httpHeaders }
    );
  }

  checkIsCustomer(pn): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'customersbynum/' + pn + '/',
      { headers: this.httpHeaders }
    );
  }

  checkUserPresent(pn): Observable<any> {
    //   const details={username:pn,password:pw,first_name:n};
    return this.http.get<any>(this.baseUrl + 'usersbynum/' + pn + '/',
      { headers: this.httpHeaders }
    );
  }

  checkUserNamePresent(un): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'usersbyusername/' + un + '/',
      { headers: this.httpHeaders }
    );
  }

  addToCustomers(n, a, pin, e, aa, ppd, plan, d): Observable<any> {
    const details = {
      name: n,
      address: a,
      pincode: pin,
      aadhar: aa,
      aadhar_verified: false,
      email: e,
      phone_num: "0",
      type1: ppd,
      plan: plan,
      kyc_date: d,
      balance: "Rs.0",
      expiriesIn: "0",
      callUsage: "0",
      dataUsage: "0",
      smsUsage: "0",
      bill: "0"
    };
    return this.http.post<any>(this.baseUrl + "customersbynum/", details, {
      headers: this.httpHeaders
    });
  }

  updateCustomersBill(det, bill): Observable<any> {
    const details = {
      name: det.name,
      address: det.address,
      pincode: det.pincode,
      aadhar: det.aadhar,
      aadhar_verified: det.aadhar_verified,
      email: det.email,
      phone_num: det.phone_num,
      type1: det.type1,
      plan: det.plan,
      kyc_date: det.kyc_date,
      balance: det.balance,
      expiriesIn: det.expiriesIn,
      callUsage: det.callUsage,
      dataUsage: det.dataUsage,
      smsUsage: det.smsUsage,
      bill: bill
    };
    return this.http.put<any>(
      this.baseUrl + "customersbynum/" + det.phone_num + "/",
      details,
      {
        headers: this.httpHeaders
      }
    );
  }

  login(un,pw) {
    const details = {username:un,password:pw};
    return this.http.post(this.baseUrl + 'auth/', details,
    {headers: this.httpHeaders}
    );
  }


  getCredit(cn):Observable<any>{
    return this.http.get(this.baseUrl + "creditbynum/"+ cn + "/",
    {headers: this.httpHeaders}
    );
  } 

  changeCredit(id,cn,cvv,pin,bal):Observable<any>{
    const detail={cardnumber: cn,
    cvv: cvv,
    pinnumber: pin,
    balance: bal};
    return this.http.put<any>(this.baseUrl + "credit/"+id+"/",detail,
    {headers:this.httpHeaders}
    );

  }

  getBank(b,an):Observable<any>{
    return this.http.get(this.baseUrl + b + "bynum/" + an + "/",
    {headers: this.httpHeaders}
    );
  }

  changeBank(b,id,an,pw,bal):Observable<any>{
    const detail={accountnumber:an,password:pw,balance:bal};
    return this.http.put<any>(this.baseUrl + b + "/" + id + "/",detail,
    {headers:this.httpHeaders}
    );
  }

  postComplaint(c):Observable<any>
  {
    const details={phone_num:this.getNum(),msg:c};
    return this.http.post<any>(this.baseUrl + "complaint/",details,
    {headers: this.httpHeaders}
    );
  }

  getFaqs():Observable<any>
  {
    return this.http.get(this.baseUrl + "faq/",
    {headers:this.httpHeaders}
    );
  }



  getPrepaid(): Observable<any> {
    return this.http.get(this.baseUrl + "prepaid/", {
      headers: this.httpHeaders
    });
  }

  getPostpaid(): Observable<any> {
    return this.http.get(this.baseUrl + "postpaid/", {
      headers: this.httpHeaders
    });
  }

  getDongle(): Observable<any> {
    return this.http.get(this.baseUrl + "dongle/", {
      headers: this.httpHeaders
    });
  }

  // getOnlineUsers():Observable<any>
  // {
  //   return this.http.get<any>(this.baseUrl+'onlineusers/',
  //   {headers:this.httpHeaders}
  //   );
  // }

  // getOnlineUserDetails(id):Observable<any>
  // {
  //   return this.http.get<any>(this.baseUrl+'onlineusers/'+id+'/',
  //   {headers:this.httpHeaders}
  //   );
  // }

  // createOnlineUser(ou):Observable<any>
  // {
  //   const details={name:ou.name,phone_num:ou.phone_num,pw:ou.pw,retype_pw:ou.retype_pw};
  //   return this.http.post<any>(this.baseUrl+'onlineusers/',details,
  //   {headers:this.httpHeaders}
  //   );
  // }

  // updateOnlineUser(ou):Observable<any>
  // {
  //   const details={name:ou.name,phone_num:ou.phone_num,pw:ou.pw,retype_pw:ou.retype_pw};
  //   return this.http.put<any>(this.baseUrl+'onlineusers/'+ou.id+'/',details,
  //   {headers:this.httpHeaders}
  //   );
  // }

  // deleteOnlineUser(id):Observable<any>
  // {
  //   return this.http.delete<any>(this.baseUrl+'onlineusers/'+id+'/',
  //   {headers:this.httpHeaders}
  //   );
  // }
}
