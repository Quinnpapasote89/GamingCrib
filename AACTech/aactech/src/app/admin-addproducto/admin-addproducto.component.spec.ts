import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddproductoComponent } from './admin-addproducto.component';

describe('AdminAddproductoComponent', () => {
  let component: AdminAddproductoComponent;
  let fixture: ComponentFixture<AdminAddproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
