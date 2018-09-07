import { Component, OnInit, Input } from '@angular/core';

import { ISkill } from '../models/experience'

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  styleUrls: ['./skill-badge.component.css']
})
export class SkillBadgeComponent implements OnInit {

  /* VARS */
  @Input() skill : ISkill;
  /* VARS */

  constructor() { }

  ngOnInit() {
  }

}
