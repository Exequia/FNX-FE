import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { CompanyComponent } from './company/company.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  declarations: [CompanyComponent]
})
export class ExperienceModule { }
