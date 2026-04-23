import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerRecursos } from './taller-recursos';

describe('TallerRecursos', () => {
  let component: TallerRecursos;
  let fixture: ComponentFixture<TallerRecursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallerRecursos],
    }).compileComponents();

    fixture = TestBed.createComponent(TallerRecursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
