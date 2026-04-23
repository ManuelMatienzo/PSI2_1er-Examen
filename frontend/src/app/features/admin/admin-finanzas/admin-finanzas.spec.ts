import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinanzas } from './admin-finanzas';

describe('AdminFinanzas', () => {
  let component: AdminFinanzas;
  let fixture: ComponentFixture<AdminFinanzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFinanzas],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminFinanzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
