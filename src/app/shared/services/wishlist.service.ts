import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private _HttpClient:HttpClient) { }

  wishlistNumber:BehaviorSubject<number> = new BehaviorSubject(0);


  addToWishlist(prodID:string):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {productId: prodID

    })
  }

  getWishlist():Observable<any>{

    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)

  }

  removeItemFromWishlist(prodId:string):Observable<any>{

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`)

  }

  
}
