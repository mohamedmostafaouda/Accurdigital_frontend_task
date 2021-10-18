import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsselectorComponent } from './chartsselector.component';

describe('ChartsselectorComponent', () => {
  let component: ChartsselectorComponent;
  let fixture: ComponentFixture<ChartsselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
