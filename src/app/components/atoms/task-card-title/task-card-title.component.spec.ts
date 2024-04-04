import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardTitleComponent } from './task-card-title.component';

describe('TaskCardTitleComponent', () => {
  let component: TaskCardTitleComponent;
  let fixture: ComponentFixture<TaskCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCardTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
