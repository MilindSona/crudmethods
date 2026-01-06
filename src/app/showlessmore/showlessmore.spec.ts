import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showlessmore } from './showlessmore';

describe('Showlessmore', () => {
  let component: Showlessmore;
  let fixture: ComponentFixture<Showlessmore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showlessmore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showlessmore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
