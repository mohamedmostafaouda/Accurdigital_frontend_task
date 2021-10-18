import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartslistComponent } from './chartslist.component';

describe('ChartslistComponent', () => {
  let component: ChartslistComponent;
  let fixture: ComponentFixture<ChartslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
