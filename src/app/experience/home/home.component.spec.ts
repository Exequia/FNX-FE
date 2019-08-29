import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { ExperienceRoutingModule } from '../experience-routing.module';
import { CompanyComponent } from '../company/company.component';
import { SkillsComponent } from '../skills/skills.component';
import { DomainComponent } from '../domain/domain.component';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ExperienceRoutingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        HomeComponent,
        CompanyComponent,
        SkillsComponent,
        DomainComponent,
        SkillBadgeComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expected translations keys', () => {
    const elements: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.text-capitalize')
    );
    expect(3).toBe(elements.length);
    expect(elements[0].nativeElement.textContent.trim()).toBe(
      'experience.home.companies'
    );
    expect(elements[1].nativeElement.textContent.trim()).toBe(
      'experience.home.skills'
    );
    expect(elements[2].nativeElement.textContent.trim()).toBe(
      'experience.home.domain'
    );
  });
});
