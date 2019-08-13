import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  configUrl='assets/db.json';
//i:number;
  constructor(private http:HttpClient) { }

  checkUser(l){
    
  }
  getConfig(){
    return this.http.get(this.configUrl);
  }
}
