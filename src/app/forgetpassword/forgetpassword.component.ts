import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgetPassService } from '../shared/services/forget-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  constructor( private _ForgetPassService:ForgetPassService , private _Router:Router){}

  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;

  email:string='';

  MSg:string='';

  enterEmailForm:FormGroup= new FormGroup({
    email: new FormControl('')
  })

  enterCodeForm:FormGroup= new FormGroup({
    resetCode: new FormControl('')
  })

  newPasswordForm:FormGroup= new FormGroup({
    newPassword: new FormControl('')
  })


  sendCode():void{

    let userEmail = this.enterEmailForm.value

    this.email = userEmail.email

      this._ForgetPassService.forgetPassword(userEmail).subscribe({

        next:(response)=>{


          console.log(response);
          this.MSg=response.message
          this.step1=false;
          this.step2=true;
          
          
          

        },
        error:(err)=>{

          this.MSg=err.error.message
          

        }
      })

  }

  verifyCode():void{

    let resetCode = this.enterCodeForm.value

    console.log(resetCode);
    

    this._ForgetPassService.enterCode(resetCode).subscribe({
      next:(response)=>{
        console.log(response);

        this.MSg=response.status
        this.step2=false
        this.step3=true
      },

      error:(err)=>{

        this.MSg=err.error.message
        

      }
    })

  }

  setNewPassword():void{

    let resetForm = this.newPasswordForm.value

    resetForm.email = this.email

    this._ForgetPassService.setPassword(resetForm).subscribe({

      next:(response)=>{

        if(response.token){

          localStorage.setItem( 'eToken', response.token)
          this._Router.navigate(['/home'])
        }
        
      },

      error:(err)=>{
 
        this.MSg=err.error.message
        
      }
    })
    


   

      



    
  }

}
