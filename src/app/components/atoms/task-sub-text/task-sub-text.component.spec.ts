import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSubTextComponent } from './task-sub-text.component';

describe('TaskSubTextComponent', () => {
  let component: TaskSubTextComponent;
  let fixture: ComponentFixture<TaskSubTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskSubTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskSubTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
