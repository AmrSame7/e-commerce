import { Brand } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  constructor(private _EcoDataService:EcoDataService , private _ActivatedRoute:ActivatedRoute ){}



  brandDetails:any={};


 ngOnInit(): void {

  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
console.log(param);

let brandId:any = param.get('id')

 this._EcoDataService.getSpecificBrand(brandId).subscribe({
      next:(response)=>{
       this.brandDetails=response.data
       console.log(response.data);
       
        
      }
    })

    }
  })
 

   

 
 }

}
