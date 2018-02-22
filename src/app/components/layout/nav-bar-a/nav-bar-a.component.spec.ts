import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAComponent } from './nav-bar-a.component';

describe('HeaderRowComponent', () => {
  let component: NavBarAComponent;
  let fixture: ComponentFixture<NavBarAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
