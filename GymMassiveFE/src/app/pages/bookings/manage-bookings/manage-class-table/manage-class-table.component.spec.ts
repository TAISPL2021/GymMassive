import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassTableComponent } from './manage-class-table.component';

describe('ManageClassTableComponent', () => {
  let component: ManageClassTableComponent;
  let fixture: ComponentFixture<ManageClassTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClassTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
