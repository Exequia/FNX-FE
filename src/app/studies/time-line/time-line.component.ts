import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../models/ICourse';
import { StudiesServiceService } from '../services/studies-service.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  courses: ICourse[];
  loading = false;

  constructor(
    private studiesService: StudiesServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.route.snapshot.data;
    // if (data && data.filePath) {
    //   this.invokeGetStudies(data.filePath);
    //   // this.courses = data.courses;
    //   // } else {
    //   //   this.route.('/')
    // }
    console.info('data: ', data);
    if (data && data.courses) {
      this.courses = data.courses;
    }
  }

  invokeGetStudies(filePath) {
    this.loading = true;
    this.studiesService.getStudiesFile(filePath).subscribe(fileData => {
      this.courses = fileData;
    });
  }
}
