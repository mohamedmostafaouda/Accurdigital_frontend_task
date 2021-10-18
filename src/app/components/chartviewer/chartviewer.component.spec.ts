import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartviewerComponent } from './chartviewer.component';

describe('ChartviewerComponent', () => {
  let component: ChartviewerComponent;
  let fixture: ComponentFixture<ChartviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
