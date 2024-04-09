import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTasksListComponent } from './board-tasks-list.component';

describe('BoardTasksListComponent', () => {
  let component: BoardTasksListComponent;
  let fixture: ComponentFixture<BoardTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardTasksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
