import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactezNous } from './contactez-nous';

describe('ContactezNous', () => {
  let component: ContactezNous;
  let fixture: ComponentFixture<ContactezNous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactezNous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactezNous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
