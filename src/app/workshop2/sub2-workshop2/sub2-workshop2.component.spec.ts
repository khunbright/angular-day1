import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub2Workshop2Component } from './sub2-workshop2.component';

describe('Sub2Workshop2Component', () => {
  let component: Sub2Workshop2Component;
  let fixture: ComponentFixture<Sub2Workshop2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sub2Workshop2Component]
    });
    fixture = TestBed.createComponent(Sub2Workshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
