import { Component, OnInit } from '@angular/core';
import { IContactForm } from '../models/contact-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendClientService } from './../backend-client/backend-client.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private translate: TranslateService,
    private backendService: BackendClientService,
    private toastr: ToastrService,
    private router: Router) {

    translate.setDefaultLang('ro');
    translate.use('ro');
    }

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

  public onSubmit(contactFormInstance) {
    if (this.contactForm.valid) {
      this.createContactForm(contactFormInstance);
    }
  }

  /* rename this shit */
  private createContactForm(contactFormData) {

    const formContent: IContactForm = {
      name: contactFormData.name,
      email: contactFormData.email,
      subject: contactFormData.subject,
      content: contactFormData.content,
    };

    /* TODO: send msg to backend */
    this.contactForm.reset();
    this.toastr.success('Message sent!');
  }
}
