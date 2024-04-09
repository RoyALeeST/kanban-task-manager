import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsStatusTogglerComponent } from './task-details-status-toggler.component';

describe('TaskDetailsStatusTogglerComponent', () => {
  let component: TaskDetailsStatusTogglerComponent;
  let fixture: ComponentFixture<TaskDetailsStatusTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailsStatusTogglerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDetailsStatusTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
