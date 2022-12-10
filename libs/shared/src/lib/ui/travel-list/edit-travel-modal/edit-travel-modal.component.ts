import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { validateTel } from '../../../validate/tel.validate';

@Component({
  selector: 'lib-edit-travel-modal',
  templateUrl: './edit-travel-modal.component.html',
  styleUrls: ['./edit-travel-modal.component.scss'],
})
export class EditTravelModalComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    distric:['',Validators.required],
    address: ['', Validators.required],
    tel: ['', validateTel],
    email: ['', Validators.email],
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get districControl() {
    return this.form.get('distric') as FormControl;
  }

  get addressControl() {
    return this.form.get('address') as FormControl;
  }

  get telControl() {
    return this.form.get('tel') as FormControl;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef,
    private fb: FormBuilder
  ) {
    this.form.patchValue(data.item);
  }
}
