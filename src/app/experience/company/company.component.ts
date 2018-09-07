import { Component, OnInit } from '@angular/core';

import { Ijob, ISkillExpirience, ISkill, Domain } from '../models/experience'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  /* VARS */
  tags : any = {};
  jobs : Array<Ijob>;
  /* VARS */

  /* TO DELETE */
  jobsData : Array<Ijob> = [];

  skillJava : ISkill = {
    'id': 0,
    'name': 'Java'
  };

  scrumJava : ISkill = {
    'id': 1,
    'name': 'Scrum'
  };

  skillJavaExpirience : ISkillExpirience = {
    'skill': this.skillJava,
    // 'expiriencies'?: Array<ItimeExpirience>;
    'time': 2592000,
    'domain': Domain.getDomain(2595000 * 13)
  }

  skillScrumExpirience : ISkillExpirience = {
    'skill': this.scrumJava,
    // 'expiriencies'?: Array<ItimeExpirience>;
    'time': 2592000,
    'domain': Domain.getDomain(2592000)
  }

  skillsExpirienceData0 : Array<ISkillExpirience> = [];

  jobData0 : Ijob = {
    'id': 0,
    'company': 'Deloitte',
    'companyURL': 'https://www.google.es/',
    'dateInit': new Date(2018,3,21),
    'dateEnd': new Date(),
    'role':  'team lead',
    'description':  'managing team of 5 developers',
    'skills': this.skillsExpirienceData0
  };
  /* TO DELETE */

  constructor() { }

  ngOnInit() {
    this.tags.as = 'como';
    this.tags.in = 'en';

    this.skillsExpirienceData0.push(this.skillJavaExpirience);
    this.skillsExpirienceData0.push(this.skillScrumExpirience);
    this.jobsData.push(this.jobData0);
    this.jobsData.push(this.jobData0);
    this.jobs = this.jobsData;
  }

}
