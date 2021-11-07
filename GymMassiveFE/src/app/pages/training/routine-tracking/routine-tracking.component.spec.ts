import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineTrackingComponent } from './routine-tracking.component';

describe('RoutineTrackingComponent', () => {
  let component: RoutineTrackingComponent;
  let fixture: ComponentFixture<RoutineTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
