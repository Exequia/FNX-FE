import { Component, OnInit, Input } from '@angular/core';

import { ISkill } from '../models/IExperience';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  styleUrls: ['./skill-badge.component.css']
})
export class SkillBadgeComponent implements OnInit {
  /* VARS */
  @Input() skill: ISkill;
  /* VARS */

  constructor() {}

  ngOnInit() {}

  markSkill() {
    this.skill.selected = true;
  }

  unMarkSkill(skill: ISkill) {
    this.skill.selected = false;
  }
}
