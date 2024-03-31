import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Category, product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _EcoDataService:EcoDataService, private _CartService:CartService , private _ToastrService:ToastrService, private _WishlistService:WishlistService){}

  categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay:true,
    items:1,
    
    nav: false,
  }


  searchText:string='';
  categories:Category[]=[ ];
  products:product[]=[];

   addProduct(id:string):void{

    this._CartService.addToCart(id).subscribe({
    next:(response)=>{

      console.log(response);
      this._ToastrService.success( response.message,'Fresh Cart')
      this._CartService.cartNumber.next(response.numOfCartItems)
    },
    error:(err)=>{

      console.log(err);
      
    }

    })


   }

  

   addProductToWishlist(prodID:string):void{

    this._WishlistService.addToWishlist(prodID).subscribe({
      next:(response)=>{

        console.log(response);
        

        this._ToastrService.success(response.message)
        
      }
    })
 
     
   }

ngOnInit(): void {

  this._EcoDataService.getAllProducts().subscribe({
    next:(response)=>{

      console.log(response);

      this.products=response.data
      

    }
  })

  this._EcoDataService.getCategories().subscribe({

    next:(response)=>{

      this.categories=response.data
      

    }


  })
    
}

}
