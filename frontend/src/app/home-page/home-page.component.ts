import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // mediaSubscription: Subscription;
  // columsNo: number = 2;
  // deviceXs: boolean;
  breakpoint: number = 2;
  maxWidth: number = 600;

  constructor(
    public mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    // this.mediaSubscription = this.mediaObserver.media$.subscribe((result: MediaChange) => {
    //   this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   if (this.deviceXs) {
    //     this.columsNo = 1;
    //   } else {
    //     this.columsNo = 2;
    //   }
    // });
    this.breakpoint = (window.innerWidth <= this.maxWidth) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= this.maxWidth ? 1 : 2);
  }

  ngOnDestroy() {
    // this.mediaSubscription.unsubscribe();
  }

}
