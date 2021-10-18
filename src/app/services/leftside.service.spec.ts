import { TestBed } from '@angular/core/testing';

import { LeftsideService } from './leftside.service';

describe('LeftsideService', () => {
  let service: LeftsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
