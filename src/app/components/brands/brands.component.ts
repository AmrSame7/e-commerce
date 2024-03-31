import { Brand } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor( private _EcoDataService:EcoDataService){}

  brands:any=[]

  ngOnInit(): void {
      this._EcoDataService.getAllBrands().subscribe({
        next:(response)=>{

          console.log(response.data);

          this.brands=response.data
          
        },

        error:(err)=>{
          console.log(err);
          

        }
      })
  }

 

}
