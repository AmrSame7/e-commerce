import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/product';
import { EcoDataService } from 'src/app/shared/services/eco-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private _EcoDataService:EcoDataService){}

  categories:any={
    _id: '',
    name: '',
    slug: '',
    image: ''
  };
  ngOnInit(): void {
      this._EcoDataService.getAllCategories().subscribe({
        next:(response)=>{

          console.log(response);
          
              
           this.categories=response.data
           
        },

        error:(err)=>{
            console.log(err);
            
        }
      })
  }

}
