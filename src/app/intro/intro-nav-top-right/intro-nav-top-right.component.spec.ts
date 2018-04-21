import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNavTopRightComponent } from './intro-nav-top-right.component';

describe('IntroNavTopRightComponent', () => {
  let component: IntroNavTopRightComponent;
  let fixture: ComponentFixture<IntroNavTopRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroNavTopRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNavTopRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
