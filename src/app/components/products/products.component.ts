import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _EcoDataService:EcoDataService, private _CartService:CartService , private _ToastrService:ToastrService ,private _WishlistService:WishlistService){}


  products:product[]=[];

  searchText:string='';

  pageSize:number=0;
  currentPage:number=1;
  total:number=0;
  
ngOnInit(): void {
  this._EcoDataService.getAllProducts().subscribe({
    next:(response)=>{

      console.log(response);

      this.products=response.data
      this.pageSize=response.metadata.limit
      this.currentPage=response.metadata.currentPage
      this.total=response.results
      

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

   pageChanged(event:any):void{
    
    this._EcoDataService.getAllProducts(event).subscribe({
      next:(response)=>{
  
        console.log(response);
  
        this.products=response.data
        this.pageSize=response.metadata.limit
        this.currentPage=response.metadata.currentPage
        this.total=response.results
        
  
      }
    })
    
   }

   addProductToWishlist(prodID:string):void{

    this._WishlistService.addToWishlist(prodID).subscribe({
      next:(response)=>{

        

        this._ToastrService.success(response.message)
        
      }
    })
 
     
   }

}
