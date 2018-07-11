import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCourseContainerComponent } from './base-course-container.component';

describe('HeaderRowComponent', () => {
  let component: BaseCourseContainerComponent;
  let fixture: ComponentFixture<BaseCourseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCourseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
