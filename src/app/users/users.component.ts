

import { Component } from '@angular/core';
import _ from 'lodash';

import { MainService } from '../shared/main-service/main.http.service';
import { PopupsService } from '../shared/popups/popups.service';
import {MainAuthorizationService} from "../shared/main-service/main.authorization.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  constructor(
      private mainService: MainService,
      private mainAuthorizationService: MainAuthorizationService,
      private popupsService: PopupsService
  ) {}

  users: any;

    ngOnInit() {
        this.mainService.get('users').then(response => this.users = response);
    }

    checkAuthorization() {
        return this.mainAuthorizationService.checkAuthorization();
    }

    getUser() {
      return this.mainAuthorizationService.getUser();
    }

    async delete(user, index) {
        let hasTranslations = false;
        let translations;
        await this.mainService.get('translations').then(response => {
          if (_.filter(response, {creator_email: user.email}).length) {
            hasTranslations = true;
            translations = _.filter(response, {creator_email: user.email});
          }
        });

        if (hasTranslations) {
          this.popupsService.openMessage(`
            You can't delete "${user.name}" user because translations what was created of user are available:
              "${_.map(_.unionBy(translations, 'titleEn'), 'titleEn').join(', ')}".
              At first you should be remove all translations and retry delete user again
          `);
        } else {
            //this.users.splice(index, 1);
            this.mainService.deleteById('users', user._id).then(response => console.log('User was deleted!'));
        }
    }
}
