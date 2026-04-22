import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerLayout } from './taller-layout';

describe('TallerLayout', () => {
  let component: TallerLayout;
  let fixture: ComponentFixture<TallerLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallerLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(TallerLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
