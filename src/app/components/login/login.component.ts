import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){}

  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null , [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)])
  })


  msgError:string="";

  loadingSpinner:boolean=false;

  login():void{
    this.loadingSpinner=true;
this._AuthService.setLogin(this.loginForm.value).subscribe({

  next:(response)=>{
    if(response.message=='success'){
      this.loadingSpinner=false;

      console.log(response);
      

      localStorage.setItem('eToken',response.token)

      this._AuthService.decodeData();    
    this._Router.navigate(['/home'])

  }
    
  },

  error:(err:HttpErrorResponse)=>{

    this.loadingSpinner=false;

   this.msgError=err.error.message
    

  }

})
    
  }

}
