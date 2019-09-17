import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPageComponent } from './story-page.component';

describe('StoryPageComponent', () => {
  let component: StoryPageComponent;
  let fixture: ComponentFixture<StoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
