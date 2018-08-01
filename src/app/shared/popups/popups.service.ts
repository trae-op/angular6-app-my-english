

import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './NgbdModalContent.component';

// for adding other services 
@Injectable()

export class PopupsService {

  closeResult: string;

  constructor(private modalService: NgbModal) {}
  
  openPopup(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openMessage(message) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.message = message;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}