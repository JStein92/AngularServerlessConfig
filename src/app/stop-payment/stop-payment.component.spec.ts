import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPaymentComponent } from './stop-payment.component';

describe('StopPaymentComponent', () => {
  let component: StopPaymentComponent;
  let fixture: ComponentFixture<StopPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
