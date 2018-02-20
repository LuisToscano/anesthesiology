import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseColumnComponent } from './course-column.component';

describe('CourseColumnComponent', () => {
  let component: CourseColumnComponent;
  let fixture: ComponentFixture<CourseColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
