import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsDescriptionComponent } from './task-details-description.component';

describe('TaskDetailsDescriptionComponent', () => {
  let component: TaskDetailsDescriptionComponent;
  let fixture: ComponentFixture<TaskDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
