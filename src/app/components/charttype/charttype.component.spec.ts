import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttypeComponent } from './charttype.component';

describe('CharttypeComponent', () => {
  let component: CharttypeComponent;
  let fixture: ComponentFixture<CharttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
