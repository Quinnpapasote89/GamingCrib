import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProvComponent } from './admin-add-prov.component';

describe('AdminAddProvComponent', () => {
  let component: AdminAddProvComponent;
  let fixture: ComponentFixture<AdminAddProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
