import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RorbComponent } from './rorb.component';

describe('RorbComponent', () => {
  let component: RorbComponent;
  let fixture: ComponentFixture<RorbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RorbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
