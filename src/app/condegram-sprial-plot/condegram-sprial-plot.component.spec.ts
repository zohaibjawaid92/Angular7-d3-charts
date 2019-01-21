import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondegramSprialPlotComponent } from './condegram-sprial-plot.component';

describe('CondegramSprialPlotComponent', () => {
  let component: CondegramSprialPlotComponent;
  let fixture: ComponentFixture<CondegramSprialPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondegramSprialPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondegramSprialPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
