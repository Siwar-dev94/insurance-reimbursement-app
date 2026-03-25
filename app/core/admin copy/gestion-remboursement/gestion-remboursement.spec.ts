import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRemboursementComponent } from './gestion-remboursement';

describe('GestionRemboursement', () => {
  let component: GestionRemboursementComponent;
  let fixture: ComponentFixture<GestionRemboursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionRemboursementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
