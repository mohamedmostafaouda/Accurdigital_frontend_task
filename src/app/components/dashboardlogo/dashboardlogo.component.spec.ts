import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlogoComponent } from './dashboardlogo.component';

describe('DashboardlogoComponent', () => {
  let component: DashboardlogoComponent;
  let fixture: ComponentFixture<DashboardlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardlogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
