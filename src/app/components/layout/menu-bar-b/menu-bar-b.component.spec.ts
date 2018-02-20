import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarBComponent } from './menu-bar-b.component';

describe('HeaderRowComponent', () => {
  let component: MenuBarBComponent;
  let fixture: ComponentFixture<MenuBarBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
