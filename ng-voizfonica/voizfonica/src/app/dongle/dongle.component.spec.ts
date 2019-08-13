import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleComponent } from './dongle.component';

describe('DongleComponent', () => {
  let component: DongleComponent;
  let fixture: ComponentFixture<DongleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
