import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbrustComponent } from './sunbrust.component';

describe('SunbrustComponent', () => {
  let component: SunbrustComponent;
  let fixture: ComponentFixture<SunbrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunbrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
