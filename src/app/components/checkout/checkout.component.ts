import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor( private _FormBuilder:FormBuilder, private _CartService:CartService ,private _ActivatedRoute:ActivatedRoute){}

  checkoutGroup:FormGroup=this._FormBuilder.group({
      
    details:[''],
    phone:[''],
    city:['']

  })

  cartId:any='';

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{

        console.log(params.get('id'));
        this.cartId=params.get('id')
        
      }
    })
  
  }



  handleform():void{

    console.log(this.checkoutGroup.value);

    this._CartService.checkoutCart(this.cartId,this.checkoutGroup.value).subscribe({
      next:(response)=>{
       if(response.status=='success'){
        console.log(response);
        window.open(response.session.url,'_self')
          
       }
        
      }
    })
    
    
    
  }

 


}
