import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {}



  logOutUser(){
    localStorage.removeItem('eToken')

    this._Router.navigate(['/login'])


  }



  finalData:any ='';

  decodeData(){

    if(localStorage.getItem('eToken') != null){
      
      let encodedData:any= localStorage.getItem('eToken');
      let decodedData= jwtDecode(encodedData)

      console.log(decodedData);

      this.finalData=decodedData
      
    }
 
     

  }

    setRegister(userData:object):Observable<any> 
    {
    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,  userData );
    }

    setLogin(userData:object):Observable<any> {
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
    }
   
}
