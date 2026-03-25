import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriSuccess } from './inscri-success';

describe('InscriSuccess', () => {
  let component: InscriSuccess;
  let fixture: ComponentFixture<InscriSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
