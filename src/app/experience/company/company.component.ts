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

  skillJavaExpirience : ISkillExpirience = {
    'skill': this.skillJava,
    // 'expiriencies'?: Array<ItimeExpirience>;
    'time': 2592000,
    'domain': Domain.getDomain(2595000 * 13)
  }

  skillsExpirienceData0 : Array<ISkillExpirience> = [];

  jobData0 : Ijob = {
    'id': 0,
    'company': 'Deloitte',
    'companyURL': 'www.google.es',
    'dateInit': new Date(2018,3,21),
    'dateEnd': new Date(),
    'role':  'team lead',
    'description':  'managing team of 5 developers',
    'skills': this.skillsExpirienceData0
  };
  /* TO DELETE */

  constructor() { }

  ngOnInit() {
    this.skillsExpirienceData0.push(this.skillJavaExpirience);
    this.jobsData.push(this.jobData0);
    this.jobsData.push(this.jobData0);
    this.jobs = this.jobsData;
  }

}
