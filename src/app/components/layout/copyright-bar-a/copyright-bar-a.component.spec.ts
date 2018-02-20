import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightBarAComponent } from './copyright-bar-a.component';

describe('HeaderRowComponent', () => {
  let component: CopyrightBarAComponent;
  let fixture: ComponentFixture<CopyrightBarAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightBarAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightBarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
