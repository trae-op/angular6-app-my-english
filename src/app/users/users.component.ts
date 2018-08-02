

import { Component } from '@angular/core';

import { MainService } from '../shared/main-service/main.http.service';
import {MainAuthorizationService} from "../shared/main-service/main.authorization.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  constructor(
      private mainService: MainService,
      private mainAuthorizationService: MainAuthorizationService
  ) {}

  users: any;

    ngOnInit() {
        this.mainService.get('users').then(response => {
          this.users = response;
        });
    }

    getUser() {
      return this.mainAuthorizationService.getUser();
    }
}
