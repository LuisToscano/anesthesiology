import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarAComponent } from './menu-bar-a.component';

describe('HeaderRowComponent', () => {
  let component: MenuBarAComponent;
  let fixture: ComponentFixture<MenuBarAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
