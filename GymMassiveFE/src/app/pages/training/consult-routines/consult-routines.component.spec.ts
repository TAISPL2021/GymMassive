import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRoutinesComponent } from './consult-routines.component';

describe('ConsultRoutinesComponent', () => {
  let component: ConsultRoutinesComponent;
  let fixture: ComponentFixture<ConsultRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
