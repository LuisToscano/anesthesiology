import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDemoComponent } from './layout-demo.component';

describe('LayoutDemoComponent', () => {
  let component: LayoutDemoComponent;
  let fixture: ComponentFixture<LayoutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
