

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';

import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { MainAuthorizationService } from './main.authorization.service';
import { config } from '../../../config';

// for adding other services 
@Injectable()

export class MainService {

  constructor(
    private httpClient: HttpClient,
    private mainAuthService: MainAuthorizationService
  ) {}
  
  cacheData: any = {};
  private cacheDataFirstOnly: any = false;
  activateLoader: boolean = false;

  get(nameRequest) {
    return new Promise(resolve => {
        if (!this.cacheData[nameRequest]) {
          this.mainRequest('get', [this.mainUrl() + nameRequest]).then(response => {
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
          this.mainRequest('post', [this.mainUrl() + nameRequest, data]).then(response => {
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
        this.mainRequest('put', [this.mainUrl() + nameRequest, data]).then(response => {
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

        this.mainRequest('post', [this.mainUrl() + nameRequest, data]).then(response => {
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
    this.cacheData = {};
    this.mainAuthService.clearUserMyself();
    this.mainAuthService.setToken(false);
    this.mainAuthService.clearAuthHeaderForAPI();
  }

  deleteById(nameRequest, id) {
    return new Promise(resolve => {
      this.mainRequest('delete', [this.mainUrl() + nameRequest + '/' + id]).then(response => {
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
    return _.filter(collection, JSON.parse('{"' + prop + '":"' + value + '"}'));
  }

  private mainRequest(typeRequest, options): Promise<any> {
    let httpClientOptions = {
      observe: 'body',
      responseType: 'json'
    };
    let checkType = (options.length > 1)
      ? this.httpClient[typeRequest](options[0], options[1], httpClientOptions)
      : this.httpClient[typeRequest](options[0], httpClientOptions);

    return new Promise(resolve => {
        this.activateLoader = true;
      checkType.catch(error => {
          this.activateLoader = false;
          return throwError(error);
      }).subscribe(response => {
          this.activateLoader = false;
          resolve(response);
      });
    });
  }

  private cacheIndex(name, data) {
    return _.findIndex(this.cacheData[name], data);
  }   

  private mainUrl() {
    return config.API_URL + '/';
  }

}