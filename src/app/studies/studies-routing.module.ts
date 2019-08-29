import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      // pathMatch: 'full',
      path: 'studies',
      component: HomeComponent,
      // children: [
      //   {
      //     path: '',
      //     component: CompanyComponent,
      //   },
      //   {
      //     path: 'company',
      //     component: CompanyComponent,
      //   },
      //   {
      //     path: 'skills',
      //     component: SkillsComponent,
      //   },
      //   {
      //     path: 'domain',
      //     component: DomainComponent,
      //   }
      // ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule { }
