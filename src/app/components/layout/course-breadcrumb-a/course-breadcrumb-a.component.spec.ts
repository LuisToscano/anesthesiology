import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBreadcrumbAComponent } from './course-breadcrumb-a.component';

describe('HeaderRowComponent', () => {
  let component: CourseBreadcrumbAComponent;
  let fixture: ComponentFixture<CourseBreadcrumbAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBreadcrumbAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBreadcrumbAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
