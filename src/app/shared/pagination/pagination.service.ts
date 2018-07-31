

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// for adding other services 
@Injectable()

export class PaginationService {

  constructor(private route: ActivatedRoute) {}

  items: any = [];

  // pageNumber: number = Number(this.route.snapshot.params.pageNumber);
  
  group(array, count) {
    let stringArray = '';
    let ceil = Math.ceil(array.length/count);
    for (let i = 0; i < ceil; i = i + 1) {
      stringArray = stringArray + ('[]' + ((ceil-1) !== i ? ',' : ''))
    }
    let groups = JSON.parse('[' + stringArray + ']');
    for (let j = 0; j < groups.length; j = j + 1) {
      groups[j] = array.slice((j * count), ((j * count) + count));
    }
    return groups;
  }


  showNumbering(pageNumber, index) {
    return pageNumber === (index+3)
        || pageNumber === (index+2)
        || pageNumber === (index + 1)
        || pageNumber === index
        || pageNumber === (index-1);

  }

  showDots (pageNumber, index) {
    return pageNumber === (index+4) || pageNumber === (index-2);
  }

  nextPage (pageNumber) {
    return pageNumber + 1;
  }

  prevPage = function (pageNumber) {
    return pageNumber - 1;
  }

}