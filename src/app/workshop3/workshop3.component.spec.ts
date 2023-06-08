import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop3Component } from './workshop3.component';

describe('Workshop3Component', () => {
  let component: Workshop3Component;
  let fixture: ComponentFixture<Workshop3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Workshop3Component]
    });
    fixture = TestBed.createComponent(Workshop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
