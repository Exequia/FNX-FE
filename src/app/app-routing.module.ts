import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { 
    pathMatch: 'full',
    path: '',
    component: HomeComponent
  },
  { 
    pathMatch: 'full',
    path: 'home', 
    component: HomeComponent 
  },
  //,{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //,{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}