import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop5Component } from './workshop5.component';

describe('Workshop5Component', () => {
  let component: Workshop5Component;
  let fixture: ComponentFixture<Workshop5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Workshop5Component]
    });
    fixture = TestBed.createComponent(Workshop5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
