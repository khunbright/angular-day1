import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submini2Component } from './submini2.component';

describe('Submini2Component', () => {
  let component: Submini2Component;
  let fixture: ComponentFixture<Submini2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Submini2Component]
    });
    fixture = TestBed.createComponent(Submini2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
