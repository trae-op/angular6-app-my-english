

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MainService } from '../shared/main-service/main.http.service';
import { PopupsService } from '../shared/popups/popups.service';
import { PaginationService } from '../shared/pagination/pagination.service';

import { TranslationsScheme } from '../shared/translationsScheme';
import {MainAuthorizationService} from "../shared/main-service/main.authorization.service";

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private popupsService: PopupsService,
    private paginationService: PaginationService,
    private mainAuthorizationService: MainAuthorizationService
  ) {}

  title: string = this.route.snapshot.params.titleEn;

  //items: TranslationsScheme[];
    items: any;
  pagination: any;

  // data default for "ngb-pagination"
  paginationOptions: any = {
    page: 1,
    paginationGroup: [],
    itemsPage: 5
  };

  indexTranslation: number;
  idTranslation: string;
  fields: any;

  ngOnInit() {

    this.fields = [
      {
        type: 'text',
        name: 'title_en',
        placeholder: 'title english',
        text: '',
        required: true
      },
      {
        type: 'text',
        name: 'title_rus',
        placeholder: 'title russion',
        text: '',
        required: true
      },
      {
        type: 'textarea',
        name: 'description_en',
        placeholder: 'description english',
        text: '',
        required: true
      },
      {
        type: 'textarea',
        name: 'description_rus',
        placeholder: 'description russion',
        text: '',
        required: true
      }
    ];

      this.updatePagination().then( paginationGroup => {
        this.items = paginationGroup[this.pageNumber() - 1];
        this.paginationOptions.page = this.pageNumber();

        //console.log(this.items[0].creator_email)
      });
    
  }

    pageNumber(): number {
        return Number(this.route.snapshot.params.pageNumber);
    }

    checkAuthorization() {
        return this.mainAuthorizationService.checkAuthorization();
    }

  onPageChange(pageNumber: number) {
    this.router.navigate(['/detail/'+this.title+'/page/' + pageNumber]);
    this.items = this.paginationOptions.paginationGroup[pageNumber - 1];
  }

  getUser() {
    return this.mainAuthorizationService.getUser();
  }

  getBorderStatus(text) {
    return text.search(/\<hb\>$/) > 0 ? true : false;
  }

  update(currentData, index) {
    let titleForm = 'Update Translation';

    this.fields[0].text = currentData.titleEn;
    this.fields[1].text = currentData.titleRus;
    this.fields[2].text = currentData.descriptionEn;
    this.fields[3].text = currentData.descriptionRus;

    this.popupsService.openPopup({
        titleForm,
        fields: this.fields,
        submit: (data: any) => {
            let dataForm = {
                _id: currentData._id,
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.getUser().email
            };

            this.mainService.update('translations', dataForm)
                .then(response => {
                  this.items[index] = response;
                });


        }
    });
  }


  addPopup() {
    let titleForm = 'Add Translation';

    this.fields[0].text = this.items[0].titleEn;
    this.fields[1].text = this.items[0].titleRus;
    this.fields[2].text = '';
    this.fields[3].text = '';

    this.popupsService.openPopup({
        titleForm,
        fields: this.fields,
        submit: (data: any) => {
            let dataForm = {
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.getUser().email
            };

            this.mainService.post('translations', dataForm)
                .then(response => {
                    this.items.push(response);

                    this.updatePagination().then( (paginationGroup: any) => {
                        this.items = paginationGroup[paginationGroup.length - 1];
                        this.router.navigate(['/detail/'+this.title+'/page/' + paginationGroup.length]);
                        this.paginationOptions.page = paginationGroup.length;
                    });
                });


        }
    });
  }

  delete(id, index) {
    this.mainService.deleteById('translations', id).then(response => {
      this.items.splice(index, 1);
      this.updatePagination().then( (paginationGroup: any) => {
        this.items = paginationGroup[this.pageNumber() - 1];
      });
    });
  }

  private updatePagination() {
      return new Promise((resolve, reject) => {
        this.mainService.get('translations').then(response => {
          let findByValue = this.mainService.findByValue(this.title, 'titleEn', response);
          this.paginationOptions.paginationGroup = this.paginationService.group(findByValue, this.paginationOptions.itemsPage);
          resolve(this.paginationOptions.paginationGroup);
        });
      });
  }

}
