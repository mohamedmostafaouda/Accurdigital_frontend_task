import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsmenuComponent } from './chartsmenu.component';

describe('ChartsmenuComponent', () => {
  let component: ChartsmenuComponent;
  let fixture: ComponentFixture<ChartsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
