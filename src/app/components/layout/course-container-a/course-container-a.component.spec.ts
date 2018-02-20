import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContainerAComponent } from './course-container-a.component';

describe('HeaderRowComponent', () => {
  let component: CourseContainerAComponent;
  let fixture: ComponentFixture<CourseContainerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContainerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContainerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
