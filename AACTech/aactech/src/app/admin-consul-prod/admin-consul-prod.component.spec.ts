import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulProdComponent } from './admin-consul-prod.component';

describe('AdminConsulProdComponent', () => {
  let component: AdminConsulProdComponent;
  let fixture: ComponentFixture<AdminConsulProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
