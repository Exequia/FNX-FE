import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Ijob } from '../models/IExperience';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  /* VARS */
  jobs: Ijob[];
  /* VARS */

  constructor(private xService: ExperienceService) {}

  ngOnInit() {
    this.loadExperience();
  }

  async loadExperience() {
    this.jobs = await this.xService.getExperiencies();
  }

  getEndDate(dateEnd) {
    return dateEnd || new Date();
  }
}
