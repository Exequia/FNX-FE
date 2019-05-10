import { Component, OnInit } from '@angular/core'

import { ExperienceService } from '../services/experience.service'
import { Ijob } from '../models/experience'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  /* VARS */
  jobs: Array<Ijob>
  /* VARS */

  constructor(private xServices: ExperienceService) {}

  ngOnInit() {
    this.loadExperience()
  }

  async loadExperience() {
    this.jobs = await this.xServices.getExperiencies()
  }
}
