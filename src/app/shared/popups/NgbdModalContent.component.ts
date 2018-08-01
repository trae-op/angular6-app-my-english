import {Component, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './NgbdModalContent.component.html'
})
export class NgbdModalContent {
    @Input() message;

    constructor(public activeModal: NgbActiveModal) {}
}