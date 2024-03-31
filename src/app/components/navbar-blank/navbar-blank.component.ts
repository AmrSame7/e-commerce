import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent implements OnInit{

  constructor(private _AuthService:AuthService , private _CartService:CartService , private _Renderer2:Renderer2 , private _WishlistService:WishlistService){}

  
 
  @ViewChild('navBlank') navElement!:ElementRef

  @HostListener('window:scroll')
  onScroll():void{

  if(scrollY > 300 ){
    this._Renderer2.addClass(this.navElement.nativeElement,'py-3')

  }
  else{
    this._Renderer2.removeClass(this.navElement.nativeElement,'py-3')

  }

    
  }
  wishlistCount:number= 0;

  cartNum:number=0;

  ngOnInit(): void {

    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        console.log(data);
        this.cartNum=data
        
      }
    })

    this._CartService.getUserCart().subscribe({

      next:(response)=>{

        this.cartNum=response.numOfCartItems
        

      }
    })

    this._WishlistService.wishlistNumber.subscribe({
      next:(data)=>{
        console.log( 'wishlixt',data);

        this.wishlistCount=data
    
        
      }
    })


   


    this._WishlistService.getWishlist().subscribe({
      next:(response)=>{
        console.log( 'wishlixt',response.count);

        this.wishlistCount=response.count
    
        
      }
    })
    
      
  }


  logOut():void{

   this._AuthService.logOutUser();

  }

}
