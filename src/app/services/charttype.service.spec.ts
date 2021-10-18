import { TestBed } from '@angular/core/testing';

import { CharttypeService } from './charttype.service';

describe('CharttypeService', () => {
  let service: CharttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
