import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub1Workshop2Component } from './sub1-workshop2.component';

describe('Sub1Workshop2Component', () => {
  let component: Sub1Workshop2Component;
  let fixture: ComponentFixture<Sub1Workshop2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sub1Workshop2Component]
    });
    fixture = TestBed.createComponent(Sub1Workshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
