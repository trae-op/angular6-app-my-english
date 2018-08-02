import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular-6-social-login-v2";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormsComponent } from './shared/forms/forms.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UsersComponent } from './users/users.component';
// Background Model
import { NgbdModalContent } from './shared/popups/NgbdModalContent.component';
import { NgbdFormPopupComponent } from './shared/popups/NgbdFormPopup.component';

import { MainService } from './shared/main-service/main.http.service';
import { MainAuthorizationService } from './shared/main-service/main.authorization.service';
import { PopupsService } from './shared/popups/popups.service';
import { PaginationService } from './shared/pagination/pagination.service';
import {AuthInterceptor} from "./shared/main-service/auth.interceptor";
import {HomeService} from "./home/home.service";

import { ROUTES } from './app.routing';


export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider("302627046962629")
            },
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider("607355219083-f7jms1d61qqou9jp0i2lccb63ah7c6h6.apps.googleusercontent.com")
            }
        ]
);
    return config;
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    AngularFontAwesomeModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app-english',
      storageType: 'localStorage'
    }),
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    FormsComponent,
    PaginationComponent,
    PageNotFoundComponent,
    UsersComponent,

      // Background Model
    NgbdModalContent,
    NgbdFormPopupComponent
  ],
    // popups without <ng-template>
    entryComponents: [
        NgbdModalContent,
        NgbdFormPopupComponent
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
    },
    MainService,
    MainAuthorizationService,
    PaginationService,
    PopupsService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
