import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestem-page',
  templateUrl: './bestem-page.component.html',
  styleUrls: ['./bestem-page.component.css']
})
export class BestemPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {img: "http://placehold.it/400x300/000000"},
    {img: "http://placehold.it/400x300/111111"},
    {img: "http://placehold.it/400x300/333333"},
    {img: "http://placehold.it/400x300/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
