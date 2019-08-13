import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinquiryComponent } from './billinquiry.component';

describe('BillinquiryComponent', () => {
  let component: BillinquiryComponent;
  let fixture: ComponentFixture<BillinquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
