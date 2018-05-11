import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`.form-control.ng-invalid{ border: 1px solid red; }`]
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;
  firstName: string;
  lastName: string;
  emailAddress: string;
  comments: string;
  maxAllowedCharacter: number = 50;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      comment: ['', Validators.compose([Validators.required, Validators.maxLength(this.maxAllowedCharacter)])]
    })
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data)
    this.firstName = data.fname;
    this.lastName = data.lName;
    this.emailAddress = data.email;
    this.comments = data.comment;
  }
  resetForm() {
    this.firstName = null;
    this.lastName = null;
    this.emailAddress = null;
    this.comments = null;
  }

}
