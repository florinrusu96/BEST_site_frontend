import { Component, OnInit } from '@angular/core';
import { IContactForm } from '../models/contact-form';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      content: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.contactForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(contactFormData) {
    if (this.contactForm.valid) {
      this.createContactForm(contactFormData);
    }
  }

  private createContactForm(contactFormData) {
    this.submitted = true;

    const formContent: IContactForm = {
      name: contactFormData.name,
      email: contactFormData.email,
      subject: contactFormData.subject,
      content: contactFormData.content,
    };
  }

  get diagnostic() {
    return null;
  }
}
