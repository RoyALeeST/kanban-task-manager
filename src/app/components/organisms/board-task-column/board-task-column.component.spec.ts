import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTaskColumnComponent } from './board-task-column.component';

describe('BoardTaskColumnComponent', () => {
  let component: BoardTaskColumnComponent;
  let fixture: ComponentFixture<BoardTaskColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardTaskColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
