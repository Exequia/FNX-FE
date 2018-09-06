import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiesRoutingModule } from './studies-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    StudiesRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class StudiesModule { }
