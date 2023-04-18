import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPopoutComponent } from './payment-popout.component';

describe('PaymentPopoutComponent', () => {
  let component: PaymentPopoutComponent;
  let fixture: ComponentFixture<PaymentPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPopoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
