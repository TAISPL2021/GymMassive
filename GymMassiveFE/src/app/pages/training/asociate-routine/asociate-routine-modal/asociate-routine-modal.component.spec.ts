import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateRoutineModalComponent } from './asociate-routine-modal.component';

describe('AsociateRoutineModalComponent', () => {
  let component: AsociateRoutineModalComponent;
  let fixture: ComponentFixture<AsociateRoutineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociateRoutineModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociateRoutineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
