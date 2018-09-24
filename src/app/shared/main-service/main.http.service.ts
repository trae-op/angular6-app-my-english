

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { MainAuthorizationService } from './main.authorization.service';
import { PopupsService } from '../popups/popups.service';
import { environment } from '../../../environments/environment';

// for adding other services 
@Injectable()

export class MainService {

  constructor(
    private httpClient: HttpClient,
    private mainAuthService: MainAuthorizationService,
    private popupsService: PopupsService
  ) {}
  
  cacheData: any = {};
  private cacheDataFirstOnly: any = false;
  activateLoader: boolean = false;

  get(nameRequest) {
    return new Promise(resolve => {
        if (!this.cacheData[nameRequest]) {
          this.mainRequest('get', [this.mainUrl() + nameRequest]).subscribe(response => {
            this.cacheData[nameRequest] = response;
              resolve(response);
          });       
        } else {
            resolve(this.cacheData[nameRequest]);
        }
    });
  }

  post(nameRequest, data) {
      return new Promise(resolve => {
          this.mainRequest('post', [this.mainUrl() + nameRequest, data]).subscribe(response => {
              if (this.cacheData[nameRequest]) {
                  this.cacheData[nameRequest].push(response);
              } else {
                  this.cacheData[nameRequest] = [response];
              }
            resolve(response);
          });
      });
  }

  update(nameRequest, data) {
      return new Promise(resolve => {
        this.mainRequest('put', [this.mainUrl() + nameRequest, data]).subscribe(response => {
          this.cacheData[nameRequest][this.cacheIndex(nameRequest, { _id: response._id })] = response;
          resolve(response);
        });
      });
  }

  login (nameRequest, data) {
      return new Promise(resolve => {
        if (this.cacheDataFirstOnly) {
          this.cacheData = this.cacheDataFirstOnly;
        }

        this.mainAuthService.checkRememberMe(data.rememberMe);
          delete data.rememberMe;

        this.mainRequest('post', [this.mainUrl() + nameRequest, data]).subscribe(response => {
          this.mainAuthService.setToken(response.token);
          this.mainAuthService.addAuthHeaderForAPI(response.token);
          this.mainAuthService.setUserMyself(response.user);
          this.mainAuthService.timeSession().startSession(1); // 1 session day
            resolve(response);
        });
      });
  }

  logout () {
    this.cacheDataFirstOnly = this.cacheData;
    //this.cacheData = {};
    this.mainAuthService.clearUserMyself();
    this.mainAuthService.setToken(false);
    this.mainAuthService.clearAuthHeaderForAPI();
  }

  deleteById(nameRequest, id) {
    return new Promise(resolve => {
      this.mainRequest('delete', [this.mainUrl() + nameRequest + '/' + id]).subscribe(response => {
        this.cacheData[nameRequest].splice(this.cacheIndex(nameRequest, { _id: id }), 1);
        resolve(response);
      });
    });
  }

  getById(nameRequest, id) {
    return new Promise(resolve => {
      this.get(nameRequest).then(response => resolve(this.findByValue(id, '_id', response)));
    });
  }

   getByEmail(nameRequest, email) {
    return new Promise(resolve => {
      this.get(nameRequest).then(response => resolve(this.findByValue(email, 'creator_email', response)));
    });


  }

  findByValue(value, prop, collection) {
    return _.filter(collection, JSON.parse(`{"${prop}":"${value}"}`));
  }

  private mainRequest(typeRequest, options): Observable<any> {
    let httpClientOptions = {
      observe: 'body',
      responseType: 'json'
    };
    let additionalParams = this.httpClient[typeRequest](options[0], options[1], httpClientOptions);
    let withoutAdditionalParams = this.httpClient[typeRequest](options[0], httpClientOptions);
    let checkType = (options.length > 1) ? additionalParams : withoutAdditionalParams;

      this.activateLoader = true;
      return checkType
        .do(() => this.activateLoader = false)
        .catch(dataError => {
            let checkErrorMessage = (dataError.error && !dataError.error.message) ? dataError.message : dataError.error.message;
            let checkError = dataError.error ? checkErrorMessage : dataError.message;
            this.popupsService.openMessage(checkError);
            this.activateLoader = false;
            return throwError(dataError);
        });
  }

  private cacheIndex(name, data) {
    return _.findIndex(this.cacheData[name], data);
  }   

  private mainUrl() {
    return environment.host + environment.api;
  }

}