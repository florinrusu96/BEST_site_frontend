import { Component, OnInit, ViewChild } from '@angular/core';
import { IContactForm } from '../models/contact-form';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
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
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

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
      content: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.contactForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(contactFormInstance) {
    if (this.contactForm.valid) {
      this.createMessage(contactFormInstance);
    }
  }

  private createMessage(contactFormData) {

    const formContent: IContactForm = {
      name: contactFormData.name,
      email: contactFormData.email,
      subject: contactFormData.subject,
      content: contactFormData.content,
    };
    this.formGroupDirective.resetForm();
    this.toastr.success('Message sent!');
  }
}
