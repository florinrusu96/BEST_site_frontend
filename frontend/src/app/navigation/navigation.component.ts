import { EventPageComponent } from './../event-page/event-page.component';
import { Event } from './../models/events';
import { BackendClientService } from './../backend-client/backend-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  events: Event[];
  private eventPage: EventPageComponent;

  constructor(
    private translate: TranslateService,
    private backendService: BackendClientService,
    private router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ro');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ro');
    this.backendService.getEventList().subscribe(
      events => {
        this.events = events
      },
      error =>{
        console.log(error)
      }
    );
   }

  ngOnInit() {
    
  }

  changeLanguage(){
    if(this.translate.currentLang == "gb"){
      this.translate.use("ro")
    }
    else{
      this.translate.use("gb")
    }
  }

  goToEventPage(id: string){
    /*
    DO NOT CHANGE THIS
    This lets our navbar have the events directly from our backend. If we didn't navigate first to '/' our event page componnet would not re-init 
    and the data would stay the same.
    */
    this.router.navigate(['/']).then(() => this.router.navigateByUrl('/events/' + id));
  }

}
