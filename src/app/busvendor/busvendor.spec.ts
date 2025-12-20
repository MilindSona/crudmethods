import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Busvendor } from './busvendor';

describe('Busvendor', () => {
  let component: Busvendor;
  let fixture: ComponentFixture<Busvendor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Busvendor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Busvendor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
