import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAdvance } from './signal-advance';

describe('SignalAdvance', () => {
  let component: SignalAdvance;
  let fixture: ComponentFixture<SignalAdvance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalAdvance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalAdvance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
