import { BackendClientService } from './../backend-client/backend-client.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Event } from '../models/events';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  eventData: Event;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendClientService
  ) {}

  ngOnInit() {
    this.backendService.getEvent(this.route.snapshot.params.id).subscribe(event => this.eventData = event);
  }

}
