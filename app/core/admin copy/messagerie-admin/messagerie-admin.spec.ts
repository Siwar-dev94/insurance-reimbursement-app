import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieAdmin } from './messagerie-admin';

describe('MessagerieAdmin', () => {
  let component: MessagerieAdmin;
  let fixture: ComponentFixture<MessagerieAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagerieAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagerieAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
