import { Component, OnInit } from '@angular/core';
import { IContactForm } from '../models/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactFormData: IContactForm = {name: '', email: '', subject: '', content: ''};
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    console.log(this.contactFormData);
    return JSON.stringify(this.contactFormData);
  }
}
