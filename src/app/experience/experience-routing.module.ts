import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { SkillsComponent } from './skills/skills.component';
import { DomainComponent } from './domain/domain.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'ex',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CompanyComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'domain',
        component: DomainComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
