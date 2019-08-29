import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SkillsComponent } from './skills/skills.component';
import { DomainComponent } from './domain/domain.component';
import { SkillBadgeComponent } from './skill-badge/skill-badge.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
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
