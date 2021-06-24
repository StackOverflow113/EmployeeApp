import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeComponent } from './add-edit-employe.component';

describe('AddEditEmployeComponent', () => {
  let component: AddEditEmployeComponent;
  let fixture: ComponentFixture<AddEditEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
