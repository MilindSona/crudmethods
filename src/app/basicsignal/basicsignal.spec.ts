import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basicsignal } from './basicsignal';

describe('Basicsignal', () => {
  let component: Basicsignal;
  let fixture: ComponentFixture<Basicsignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basicsignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basicsignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
