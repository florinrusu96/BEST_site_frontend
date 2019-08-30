import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomePartnerComponent } from './become-partner.component';

describe('BecomePartnerComponent', () => {
  let component: BecomePartnerComponent;
  let fixture: ComponentFixture<BecomePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
