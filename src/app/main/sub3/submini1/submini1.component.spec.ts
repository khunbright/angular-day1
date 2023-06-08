import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submini1Component } from './submini1.component';

describe('Submini1Component', () => {
  let component: Submini1Component;
  let fixture: ComponentFixture<Submini1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Submini1Component]
    });
    fixture = TestBed.createComponent(Submini1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
