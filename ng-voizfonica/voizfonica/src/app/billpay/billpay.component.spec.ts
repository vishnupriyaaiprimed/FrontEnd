import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpayComponent } from './billpay.component';

describe('BillpayComponent', () => {
  let component: BillpayComponent;
  let fixture: ComponentFixture<BillpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
