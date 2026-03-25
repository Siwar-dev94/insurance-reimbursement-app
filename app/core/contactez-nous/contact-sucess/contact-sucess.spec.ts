import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSucess } from './contact-sucess';

describe('ContactSucess', () => {
  let component: ContactSucess;
  let fixture: ComponentFixture<ContactSucess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSucess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSucess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
