import { product } from './../interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:product[],term:string):product[] {
    return products.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
