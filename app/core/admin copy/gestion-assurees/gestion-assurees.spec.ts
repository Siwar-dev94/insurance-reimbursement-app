import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAssureesComponent } from './gestion-assurees';

describe('GestionAssurees', () => {
  let component: GestionAssureesComponent ;
  let fixture: ComponentFixture<GestionAssureesComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAssureesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAssureesComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
