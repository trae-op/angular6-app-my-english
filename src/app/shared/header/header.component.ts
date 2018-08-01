

import { Component, OnInit } from '@angular/core';

import { MainService } from '../main-service/main.http.service';
import { PopupsService } from '../../shared/popups/popups.service';
import {MainAuthorizationService} from "../main-service/main.authorization.service";

@Component({
  selector: 'header-top',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(
    private popupsService: PopupsService,
    private mainService: MainService,
    private mainAuthorizationService: MainAuthorizationService) {}


  showMobileNavbar: boolean;

  ngOnInit() {}

  openMobileNavbar() {
    this.showMobileNavbar = this.showMobileNavbar ? this.showMobileNavbar = false : this.showMobileNavbar = true;
  }

  checkAuthorization() {
    return this.mainAuthorizationService.checkAuthorization();
  }

  getUser() {
    return this.mainAuthorizationService.getUser();
  }

  login() {
    let titleForm = 'Log In';
    
    let fields = [
      {
        type: 'text',
        name: 'email',
        placeholder: 'email',
        text: '',
        required: true
      },
      {
        type: 'text',
        name: 'password',
        placeholder: 'password',
        text: '',
        required: true
      },
      {
        type: 'checkbox',
        name: 'remember_me',
        placeholder: 'remember me',
        required: false,
        text: false,
        label: true
      }
    ];

    let buttons = [
        // {
        //     type: 'google',
        //     text: 'Connect',
        //     handler: (activeModal) => {
        //         this.mainAuthorizationService.socialSignIn('google')
        //             .then(dataUser => {
        //                 dataUser['rememberMe'] = true;
        //                 this.mainService.login('users/login', dataUser)
        //                     .then(response => {
        //                         console.log('logged!');
        //                         activeModal.close('Close click');
        //                     });
        //             });
        //     }
        // },
      {
        type: 'facebook',
        text: 'Connect',
        handler: (activeModal) => {
          this.mainAuthorizationService.socialSignIn('facebook')
            .then(dataUser => {
              dataUser['rememberMe'] = true;
              this.mainService.login('users/login', dataUser)
                .then(response => {
                  console.log('logged!');
                    activeModal.close('Close click');
                });
            });
        }
      }

    ];

    this.popupsService.openPopup({
        titleForm,
        fields,
        buttons,
        submit: (data: any) => {
            this.mainService.login('users/login', {
                email: data.email,
                password: data.password,
                rememberMe: data.remember_me
            }).then(response => {
                console.log('logged!');
            });
        }
    });
  }

  logout() {
    this.mainService.logout();
  }



  registration() {
    let titleForm = 'Registration';

    let fields = [
      {
        type: 'text',
        name: 'name',
        placeholder: 'name',
        text: '',
        required: true
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'email',
        text: '',
        required: true
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'password',
        text: '',
        required: true
      },
      {
        type: 'confirmPassword',
        name: 'confirm_password',
        placeholder: 'confirm password',
        text: '',
        required: true
      }
    ];

      this.popupsService.openPopup({
          titleForm,
          fields,
          submit: (data: any) => {
              this.mainService.post('users', {
                  name: data.name,
                  email: data.email,
                  password: data.password
              }).then(userResponse => {
                  this.mainService.login('users/login', {
                      email: data.email,
                      password: data.password,
                      rememberMe: true
                  }).then(loginResponse => {
                      console.log('registred!');
                  });
              });
          }
      });
  }

}
