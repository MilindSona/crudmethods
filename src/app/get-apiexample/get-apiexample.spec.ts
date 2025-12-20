import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIexample } from './get-apiexample';

describe('GetAPIexample', () => {
  let component: GetAPIexample;
  let fixture: ComponentFixture<GetAPIexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAPIexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAPIexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
