import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../models/ICourse';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  courses: ICourse[];
  loading = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    if (data && data.courses) {
      this.courses = data.courses;
    }
  }
}
