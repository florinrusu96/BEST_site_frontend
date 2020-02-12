import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../backend-client/backend-client.service';
import { Event } from 'src/app/models/events'
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  eventList: Event[];

  constructor(private backendService: BackendClientService) { }

  ngOnInit() {
    this.backendService.getEventList().subscribe(events=> this.eventList = events);
  }

}
