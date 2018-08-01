import {Component, Input, Output, EventEmitter} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-form-popup-content',
    templateUrl: './NgbdFormPopup.component.html'
})

export class NgbdFormPopupComponent {

    @Input() dataForm: any;

    @Input() title: string;

    @Input() buttons: any;

    @Output() submit = new EventEmitter();

    fields: any = {};

    constructor(public activeModal: NgbActiveModal) {}

    validationCustom(control) {
        let result = true;
        this.fields.filled = true;
        for (let field of this.dataForm) {
            this.fields[field.name] = field.text;
        }
        if (this.fields.confirm_password) {
            if (this.fields.password === this.fields.confirm_password && control.form.valid) {
                result = false;
            }
        } else {
            result = !control.form.valid;
        }
        return result;
    }


    onSubmit() {
        this.submit.emit(this.fields);
        this.activeModal.close('Close click');
    }
}