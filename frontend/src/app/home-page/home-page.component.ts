import { Component, OnInit } from '@angular/core';

interface Item {
  h1Title: string,
  h2Title: string,
  text: string,
  buttonText: string,
}

interface ItemImage {
  src: string,
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  /* Breakpoint is the number of columns that is shown. */
  breakpoint: number = 2;
  maxWidth: number = 600;

  constructor() { }

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  onResize(innerWidth) {
    /* If screen width is lower than maxWidth, show only one column. */
    this.breakpoint = (innerWidth <= this.maxWidth ? 1 : 2);
  }
}
