import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _WishlistService:WishlistService , private _CartService:CartService , private _ToastrService:ToastrService){}

  products:product[]=[];

  wishList:string[]=[];

ngOnInit(): void {

  this._WishlistService.getWishlist().subscribe({
    next:(response)=>{

     this.products=response.data

    },

    error:(err)=>{

      console.log(err);
      
    }
  })
    
}

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

removeIdtem(prodId:string):void{


  this._WishlistService.removeItemFromWishlist(prodId).subscribe({

    next:(response)=>{

      this._WishlistService.wishlistNumber.next(response.data.length)

         this.wishList=response.data

     const newProducts=this.products.filter( (item)=>this.wishList.includes(item._id) )

     this.products=newProducts

    

    },

    error:(err)=>{

      console.log(err);
      
    }

  })


}

}
