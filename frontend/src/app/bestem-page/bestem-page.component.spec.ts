import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestemPageComponent } from './bestem-page.component';

describe('BestemPageComponent', () => {
  let component: BestemPageComponent;
  let fixture: ComponentFixture<BestemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
