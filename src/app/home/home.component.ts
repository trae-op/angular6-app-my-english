

import { Component } from '@angular/core';
//import { Router } from '@angular/router';

import { MainService } from '../shared/main-service/main.http.service';
import {MainAuthorizationService} from "../shared/main-service/main.authorization.service";
import {PopupsService} from "../shared/popups/popups.service";
import {HomeService} from "./home.service";

import _ from 'lodash';

import { TranslationsScheme } from '../shared/translationsScheme';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(
      private mainService: MainService,
      private mainAuthorizationService: MainAuthorizationService,
      private popupsService: PopupsService,
      private homeService: HomeService
  ) {}

  translations: TranslationsScheme[];

    titleForm: string;

    fields: any;

    //showMine: boolean = false;

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

    this.mainService.get('translations').then(response => {
      this.translations = _.unionBy(response, 'titleEn');
    });
  }

    findOnlyMine() {
      this.homeService.findOnlyMine().then(result => this.translations = result);
  }

    getUser() {
      return this.mainAuthorizationService.getUser();
    }

    onSubmit(data: any) {
        if (data.filled) {
            this.mainService.post('translations', {
                titleEn: data.title_en,
                titleRus: data.title_rus,
                descriptionEn: data.description_en,
                descriptionRus: data.description_rus,
                creator_email: this.getUser().email
            }).then(response => {
                this.mainService.get('translations').then(response => {
                    this.translations = _.unionBy(response, 'titleEn');
                });
            });
        }
    }

    addPopup(content: any) {
        this.titleForm = 'Add Translation';
        this.popupsService.openPopup(content);
    }

    checkAuthorization() {
      return this.mainAuthorizationService.checkAuthorization();
    }

}
