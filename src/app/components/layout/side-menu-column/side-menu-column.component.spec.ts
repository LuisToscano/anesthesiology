import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuColumnComponent } from './side-menu-column.component';

describe('SideMenuColumnComponent', () => {
  let component: SideMenuColumnComponent;
  let fixture: ComponentFixture<SideMenuColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
