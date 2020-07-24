import { EventPageComponent } from './../event-page/event-page.component';
import { Event } from './../models/events';
import { BackendClientService } from './../backend-client/backend-client.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  public flagString = 'gb';

  events: Event[];
  private eventPage: EventPageComponent;

  constructor(
    public translate: TranslateService,
    private backendService: BackendClientService,
    private router: Router,
    public dialog: MatDialog,) {

    // This language will be used as a fallback when a translation isn't found in the current language.
    translate.setDefaultLang('ro');
    // The lang to use. If the lang isn't available, it will use the current loader to get them.
    translate.use('ro');
    this.backendService.getEventList().subscribe(
      events => {
        this.events = events;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

  changeLanguage() {
    if (this.translate.currentLang === 'gb') {
      this.translate.use('ro');
      this.flagString = 'gb';
    } else {
      this.translate.use('gb');
      this.flagString = 'ro';
    }
  }

  goToEventPage(id: string) {
    this.router.navigate(['/']).then(() => this.router.navigateByUrl('/events/' + id));
  }

  openCreateForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';
    const dialogRef = this.dialog.open(ContactFormComponent, dialogConfig);
  }

  isEnglish() {
    if (this.flagString === 'ro') {
      return true;
    }

    return false;
  }

  /* Toogle side navigation for small window. */
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
