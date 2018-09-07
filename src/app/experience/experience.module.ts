import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SkillsComponent } from './skills/skills.component';
import { DomainComponent } from './domain/domain.component';
import { SkillBadgeComponent } from './skill-badge/skill-badge.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [
    HomeComponent,
    CompanyComponent,
    SkillsComponent,
    DomainComponent,
    SkillBadgeComponent
  ]
})
export class ExperienceModule { }
