import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnStatusIconComponent } from './task-column-status-icon.component';

describe('TaskColumnStatusIconComponent', () => {
  let component: TaskColumnStatusIconComponent;
  let fixture: ComponentFixture<TaskColumnStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskColumnStatusIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskColumnStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
