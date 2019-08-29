import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { CompanyComponent } from './company.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';
import { ExperienceService } from '../services/experience.service';
import { FilesService } from '../../services/files/files.service';

const jobsMock = describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let xService: ExperienceService;
  let fService: FilesService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [CompanyComponent, SkillBadgeComponent],
      providers: [ExperienceService, FilesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fService = injector.get(FilesService);
    httpMock = injector.get(HttpTestingController);
    xService = new ExperienceService(fService);
    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Jobs property should be defined`, async(() => {
    expect(component.jobs).toBeUndefined();
  }));

  it('timeline should not exits when undefined jobs', () => {
    const elements: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.timeline')
    );
    expect(0).toBe(elements.length);
  });

  it('timeline should exits when jobs has values', () => {
    spy = spyOn(xService, 'getExperiencies').and.returnValue(
      Promise.resolve(jobsMock)
    );
    xService.getExperiencies().then(jobs => {
      component.jobs = jobs;
      fixture.detectChanges();
      const elements: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.timeline')
      );
      expect(component.jobs).toBeDefined();
      expect(1).toBe(elements.length);
    });
  });

  it('expected translations keys when jobs has values', () => {
    spy = spyOn(xService, 'getExperiencies').and.returnValue(
      Promise.resolve(jobsMock)
    );
    xService.getExperiencies().then(jobs => {
      component.jobs = jobs;
      fixture.detectChanges();
      const elements: DebugElement[] = fixture.debugElement.queryAll(
        By.css('.text-capitalize')
      );
      expect(1).toBe(elements.length);
      expect(elements[0].nativeElement.textContent.trim()).toBe(
        'experience.company.role DXC Technology'
      );
    });
  });
});
