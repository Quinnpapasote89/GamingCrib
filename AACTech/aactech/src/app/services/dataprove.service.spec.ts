import { TestBed } from '@angular/core/testing';

import { DataproveService } from './dataprove.service';

describe('DataproveService', () => {
  let service: DataproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
