

import { Injectable } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './NgbdModalContent.component';
import { NgbdFormPopupComponent } from './NgbdFormPopup.component';

// for adding other services 
@Injectable()

export class PopupsService {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

    openPopup(data: any) {
        const modalRef = this.modalService.open(NgbdFormPopupComponent);
        modalRef.componentInstance.dataForm = data.fields;
        modalRef.componentInstance.title = data.titleForm;
        modalRef.componentInstance.buttons = data.buttons || false;
        modalRef.componentInstance.submit.subscribe(dataSubmit => {
            data.submit(dataSubmit);
        });
    }

  openMessage(message) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.message = message;
  }

}