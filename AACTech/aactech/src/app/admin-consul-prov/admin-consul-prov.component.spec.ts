import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulProvComponent } from './admin-consul-prov.component';

describe('AdminConsulProvComponent', () => {
  let component: AdminConsulProvComponent;
  let fixture: ComponentFixture<AdminConsulProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
