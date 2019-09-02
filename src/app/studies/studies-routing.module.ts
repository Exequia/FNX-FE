import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';

import { StudiesResolver } from './studies.resolver';

const routes: Routes = [
  {
    // pathMatch: 'full',
    path: 'studies',
    component: HomeComponent,
    children: [
      {
        path: 'regular',
        component: TimeLineComponent,
        resolve: { courses: StudiesResolver },
        data: { filePath: './assets/files/regularStudies.json' }
      },
      {
        path: 'other',
        component: TimeLineComponent,
        resolve: { courses: StudiesResolver },
        data: { filePath: './assets/files/otherStudies.json' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiesRoutingModule {}
