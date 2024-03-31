import { authGuardGuard } from './shared/guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
  {path:'',canActivate:[authGuardGuard],component:BlankLayoutComponent,children:[ 
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'brands',component:BrandsComponent},
    {path:'forgetpassword',component:ForgetpasswordComponent},
    {path:'wishlist' ,component:WishlistComponent},
    {path:'brandDetails/:id',component:BrandDetailsComponent},
    {path:'categoryDetails/:id',component:CategoryDetailsComponent},
    


  ]},
 
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgetpass',component:ForgetpasswordComponent}
  ]},
  
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
