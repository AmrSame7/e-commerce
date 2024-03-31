import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  constructor(private _EcoDataService:EcoDataService , private _ActivatedRoute:ActivatedRoute ){}

  cateDetails:any={};


  ngOnInit(): void {
 
   this._ActivatedRoute.paramMap.subscribe({
     next:(param)=>{
 console.log(param);
 
 let cateId:any = param.get('id')
 
  this._EcoDataService.getSpecificCategory(cateId).subscribe({
       next:(response)=>{
       this.cateDetails=response.data
        console.log(response.data);
        
         
       }
     })
 
     }
   })
  
 
    
 
  
  }
 

}
