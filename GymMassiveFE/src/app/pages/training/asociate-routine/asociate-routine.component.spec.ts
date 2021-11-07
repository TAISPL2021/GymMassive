import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateRoutineComponent } from './asociate-routine.component';

describe('AsociateRoutineComponent', () => {
  let component: AsociateRoutineComponent;
  let fixture: ComponentFixture<AsociateRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociateRoutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociateRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
