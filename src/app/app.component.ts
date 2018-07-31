
import { Component } from '@angular/core';
import {MainService} from "./shared/main-service/main.http.service";

import { MainAuthorizationService } from './shared/main-service/main.authorization.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
      private mainService: MainService,
      private mainAuthorizationService: MainAuthorizationService
  ) {}

  ngOnInit() {

    // It's removing session after day
    this.mainAuthorizationService.timeSession().cleanSession();
  }

  activateLoader() {
      return this.mainService.activateLoader;
  }

}
