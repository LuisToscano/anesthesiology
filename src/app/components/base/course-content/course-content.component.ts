import { Component, Input, OnInit } from '@angular/core';
import { CourseRow} from '../../../core/classes/course-row.class';
import { CourseSlide } from '../../../core/classes/course-slide.class';
import { NavigationProvider } from '../../../core/providers/navigation.provider';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{

  rows: CourseRow[];
  slideContent : CourseSlide;
  @Input() position: string;

  constructor(private navigation : NavigationProvider) {
    this.rows = [];
  }

  ngOnInit(){
    this.slideContent = this.navigation.getCurrentSlide();
    this.rows = this.slideContent.getRows();
  }

}
