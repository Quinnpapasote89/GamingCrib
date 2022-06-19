import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulIngresosComponent } from './admin-consul-ingresos.component';

describe('AdminConsulIngresosComponent', () => {
  let component: AdminConsulIngresosComponent;
  let fixture: ComponentFixture<AdminConsulIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
