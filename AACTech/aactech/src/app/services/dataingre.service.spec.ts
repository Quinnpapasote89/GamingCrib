import { TestBed } from '@angular/core/testing';

import { DataingreService } from './dataingre.service';

describe('DataingreService', () => {
  let service: DataingreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataingreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
