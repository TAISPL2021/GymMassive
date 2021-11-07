import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineDayComponent } from './routine-day.component';

describe('RoutineDayComponent', () => {
  let component: RoutineDayComponent;
  let fixture: ComponentFixture<RoutineDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
