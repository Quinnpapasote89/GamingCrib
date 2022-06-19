import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulPedidosComponent } from './admin-consul-pedidos.component';

describe('AdminConsulPedidosComponent', () => {
  let component: AdminConsulPedidosComponent;
  let fixture: ComponentFixture<AdminConsulPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
