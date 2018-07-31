

import { Injectable } from '@angular/core';
import _ from 'lodash';
import {MainService} from "../shared/main-service/main.http.service";
import {MainAuthorizationService} from "../shared/main-service/main.authorization.service";

// for adding other services
@Injectable()

export class HomeService {

    constructor(
        private mainService: MainService,
        private mainAuthorizationService: MainAuthorizationService) {}

    showMine: boolean = false;

    findOnlyMine() {
        !this.showMine ? this.showMine = true : this.showMine = false;
        let cacheTranslations = _.unionBy(this.mainService.cacheData.translations, 'titleEn');
        let findResult = _.filter(cacheTranslations, this.showMine ? {
            'creator_email': this.mainAuthorizationService.getUser().email
        } : {});
        return Promise.resolve(findResult);
    }

}