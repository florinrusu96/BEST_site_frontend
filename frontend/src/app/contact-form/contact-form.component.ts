import { Component, OnInit } from '@angular/core';
import { IContactForm } from '../models/contact-form';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl();
  content = new FormControl();

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit() {
    this.submitted = true;
  }
}
