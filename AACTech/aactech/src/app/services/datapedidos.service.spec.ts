import { TestBed } from '@angular/core/testing';

import { DatapedidosService } from './datapedidos.service';

describe('DatapedidosService', () => {
  let service: DatapedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
