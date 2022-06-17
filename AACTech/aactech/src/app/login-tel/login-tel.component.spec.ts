import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelComponent } from './login-tel.component';

describe('LoginTelComponent', () => {
  let component: LoginTelComponent;
  let fixture: ComponentFixture<LoginTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
