import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
