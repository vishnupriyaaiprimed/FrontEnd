import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconComponent } from './newcon.component';

describe('NewconComponent', () => {
  let component: NewconComponent;
  let fixture: ComponentFixture<NewconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
