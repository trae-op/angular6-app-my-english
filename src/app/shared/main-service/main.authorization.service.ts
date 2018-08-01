

import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from "angular-6-social-login";

//import { MainService } from './main.http.service';

// for adding other services 
@Injectable()

export class MainAuthorizationService {

  constructor(
      private localStorageService: LocalStorageService,
    private socialAuthService: AuthService
  ) {}
  
  firstOnlyLocalStorage: any = {
        Authorization: false,
        user: false
      };

      checkRememberMe (rememberMe) {
          this.localStorageService.set('checkRememberMe', rememberMe);
      }

      checkAuthorization () {
        let checkRememberMe = (!this.localStorageService.get('checkRememberMe'));
        let authFirstOnly = this.firstOnlyLocalStorage.Authorization;
        let auth = this.localStorageService.get('Authorization');
        let checkLocalStorage = checkRememberMe ? authFirstOnly : auth;
        return checkLocalStorage ? true : false;
      }

      addAuthHeaderForAPI (token) {
        this.localStorageService.set('Authorization', 'Bearer ' + token);
        this.firstOnlyLocalStorage.Authorization = 'Bearer ' + token;
      };

      clearAuthHeaderForAPI () {
          this.localStorageService.remove('Authorization');
          this.firstOnlyLocalStorage.Authorization = false;
      };

      setToken (token) {
        if (!token) {
          return;
        }
        this.localStorageService.set('Authorization', token);
        this.firstOnlyLocalStorage.Authorization = token;
      };

      clearUserMyself = function() {
        this.firstOnlyLocalStorage.user = false;
        this.localStorageService.remove('user');
      };

      getUser () {
         return !this.localStorageService.get('checkRememberMe') ? this.firstOnlyLocalStorage.user : this.localStorageService.get('user');
      };

      setUserMyself = function(user) {
        delete user.password;
        this.localStorageService.set('user', user);
        this.firstOnlyLocalStorage.user = user;
      };

    timeSession() {
        let currentDate = new Date();
        let currentTime = currentDate.setDate(currentDate.getDate());
        let _this = this;
        return {
            // "n: number" is amount of days
            startSession(n: number) {
                let nextDayTime = currentDate.setDate(currentDate.getDate() + n);
                _this.localStorageService.set('NextDayTime', nextDayTime + '');
            },
            cleanSession() {
                if (_this.localStorageService.get('NextDayTime')) {
                    if (currentTime > parseInt(_this.localStorageService.get('NextDayTime'))) {
                        _this.clearUserMyself();
                        _this.setToken(false);
                        _this.clearAuthHeaderForAPI();
                    }
                }
            }
        };
    }

    socialSignIn(socialPlatform : string) {
        let socialPlatformProvider;
        if(socialPlatform == "facebook"){
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        }else if(socialPlatform == "google"){
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        return new Promise(resolve => {
            this.socialAuthService.signIn(socialPlatformProvider)
                .then(userData => {
                    resolve(userData);
                    }
                );
        });

    }
}