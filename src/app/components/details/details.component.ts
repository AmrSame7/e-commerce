import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private _ActivatedRoute:ActivatedRoute, private _EcoDataService:EcoDataService,private _CartService:CartService){}



  productSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay:true,
    items:1,
    
    nav: true,
  }

  addProduct(id:string):void{

    this._CartService.addToCart(id).subscribe({
    next:(response)=>{

      console.log(response);

      this._CartService.cartNumber.next(response.numOfCartItems)
      

    },
    error:(err)=>{

      console.log(err);
      
    }

    })


   }


  productDetails:product={} as product ;

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{

        let idProduct:any = param.get('id')

        this._EcoDataService.getProductDetails(idProduct).subscribe({

          next:(response)=>{

           this.productDetails= response.data

           console.log(response.data);
           
           
            
          }


        })
        

      }
    })
}



}
