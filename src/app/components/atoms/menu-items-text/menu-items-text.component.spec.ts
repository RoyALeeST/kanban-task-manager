import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsTextComponent } from './menu-items-text.component';

describe('MenuItemsTextComponent', () => {
  let component: MenuItemsTextComponent;
  let fixture: ComponentFixture<MenuItemsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemsTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuItemsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
