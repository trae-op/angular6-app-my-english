
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html'
  //styleUrls: ['./home.component.scss']
})

export class PaginationComponent {

  constructor(
    private route: ActivatedRoute,
    private paginationService: PaginationService
    ) {}

  @Input() items: any;

   pageNumber: number = Number(this.route.snapshot.params.pageNumber);
  // pagination: any;

  ngOnInit() {
    // this.items = [];
    // this.pagination = [];

    console.log('ngOnInit',this.paginationService.items)
    // setTimeout(() => {
    //   let paginationGroup = this.paginationService.group(this.paginationService.items, 3);
    //   //this.pagination = paginationGroup;
    //   this.paginationService.items = paginationGroup[this.pageNumber - 1];
    // }, 1000);
  }

  // ngAfterContentChecked() {
  //   if (this.paginationService.items.length) {
  //     let paginationGroup = this.paginationService.group(this.paginationService.items, 3);
  //     //this.pagination = paginationGroup;
  //     this.paginationService.items = paginationGroup[this.pageNumber - 1];
  //     console.log('ngAfterViewChecked',this.paginationService.items)
  //   }
  //   //console.log('ngOnInit',this.paginationService.items)
  // }
  

  // showNumbering(index) {
  //   return this.pageNumber === (index+3)
  //       || this.pageNumber === (index+2)
  //       || this.pageNumber === (index + 1)
  //       || this.pageNumber === index
  //       || this.pageNumber === (index-1);

  // }

  // showDots (index) {
  //   return this.pageNumber === (index+4) || this.pageNumber === (index-2);
  // }

  // nextPage () {
  //   return this.pageNumber + 1;
  // }

  // prevPage = function () {
  //   return this.pageNumber - 1;
  // }

  // group(array, count) {
  //   let stringArray = '';
  //   let ceil = Math.ceil(array.length/count);
  //   for (var i = 0; i < ceil; i = i + 1) {
  //     stringArray = stringArray + ('[]' + ((ceil-1) !== i ? ',' : ''))
  //   }
  //   let groups = JSON.parse('[' + stringArray + ']');
  //   for (let j = 0; j < groups.length; j = j + 1) {
  //     groups[j] = array.slice((j * count), ((j * count) + count));
  //   }
  //   return groups;
  // }

}
