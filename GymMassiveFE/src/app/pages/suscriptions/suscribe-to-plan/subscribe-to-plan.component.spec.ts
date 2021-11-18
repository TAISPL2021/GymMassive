import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeToPlanComponent } from './suscribe-to-plan.component';

describe('SuscribeToPlanComponent', () => {
  let component: SuscribeToPlanComponent;
  let fixture: ComponentFixture<SuscribeToPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscribeToPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscribeToPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
