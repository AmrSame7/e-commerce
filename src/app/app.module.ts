import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './shared/pipes/search.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttpInterceptor } from './my-http.interceptor';

import { NgxSpinnerModule } from "ngx-spinner"
import { MySpinnerInterceptor } from './my-spinner.interceptor';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    ForgetpasswordComponent,
   
    WishlistComponent,
        BrandDetailsComponent,
        CategoryDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass:MyHttpInterceptor , multi:true },
    {provide: HTTP_INTERCEPTORS, useClass:MySpinnerInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
