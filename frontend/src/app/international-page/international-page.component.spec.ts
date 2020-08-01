import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPageComponent } from './international-page.component';

describe('InternationalPageComponent', () => {
  let component: InternationalPageComponent;
  let fixture: ComponentFixture<InternationalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});