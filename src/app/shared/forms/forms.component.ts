

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent {

  constructor() {}

  ngOnInit() {}

  @Input() dataForm: any;

  @Input() title: string;

  @Input() buttons: any;

  @Output() submit = new EventEmitter();

  fields: any = {};

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
  }

}
