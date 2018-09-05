import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { ExperienceRoutingModule } from '../experience-routing.module';
import { CompanyComponent } from '../company/company.component';
import { SkillsComponent } from '../skills/skills.component';
import { DomainComponent } from '../domain/domain.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      ExperienceRoutingModule
    ],
      declarations: [ 
        HomeComponent,
        CompanyComponent,
        SkillsComponent,
        DomainComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
