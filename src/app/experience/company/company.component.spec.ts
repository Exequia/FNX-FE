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

const jobsMock = [
  {
    id: 9,
    company: 'DXC Technology',
    companyURL: 'https://www.dxc.technology/',
    customer: 'Banc Sabadell',
    customerURL: 'https://www.bancsabadell.com/cs/Satellite/SabAtl/',
    dateInit: '2019-08-26T00:00:00.000Z',
    dateEnd: null,
    role: 'team lead',
    description:
      'Jefe de equipo técnico Front End. Migración de frontal con JSP a aplicación distribuida basada Angular. Metodologías SCRUM y Kanban. Repositorio GIT',
    skills: [
      {
        id: 5,
        name: 'angular',
        time: 2592000,
        domain: 'Master'
      }
    ]
  },
  {
    id: 8,
    company: 'Antares Sistemas',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Antares Sistemas',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2019-02-11T00:00:00.000Z',
    dateEnd: '2019-08-10T00:00:00.000Z',
    role: 'team lead',
    description:
      'Jefe de equipo y desarrollador como Full Stack. Front End con VueJs y Servicios Rest con .Net Core. Azure Devops para CI/CD. SQL server y metodologías SCRUM y Kanban. Repositorio GIT',
    skills: []
  },
  {
    id: 7,
    company: 'Deloitte DxD',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Allianz',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2018-07-31T00:00:00.000Z',
    dateEnd: '2019-09-31T00:00:00.000Z',
    role: 'team lead',
    description:
      'Jefe de equipo y desarrollador en un proyecto internacional. SCRUM con meeting en inglés. Proyecto de Angular JS, Angular+ y Java Microservicios (MVC + JPA) con conexión a Oracle. Repositorio GIT con GITLAB',
    skills: []
  },
  {
    id: 6,
    company: 'Cerba',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Cerba',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2017-07-31T00:00:00.000Z',
    dateEnd: '2018-07-31T00:00:00.000Z',
    role: 'team lead',
    description:
      'Gestión de equipo de 2 programadores para un nuevo programa de laboratorio propio basado en Angular 5 con Caché y Java (microservicios, Spring, Maven). Evolutivo de Mirth (Java) para comunicaciones e integraciones con SQL Server. Mantenimiento aplicaciones internas en .NET. Repositorio TFS',
    skills: []
  },
  {
    id: 5,
    company: 'Optimissa',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Banc Sabadell',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2016-10-31T00:00:00.000Z',
    dateEnd: '2017-07-31T00:00:00.000Z',
    role: 'department manager',
    description:
      'Gestión de un equipo de 6 personas para dar soporte de incidencias a las aplicaciones de la entidad basadas en J2EE (Maven) y Swing',
    skills: []
  },
  {
    id: 4,
    company: 'Optimissa',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Banc Sabadell',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2016-07-31T00:00:00.000Z',
    dateEnd: '2016-10-31T00:00:00.000Z',
    role: 'analist developer',
    description:
      'Toma de requerimientos y redacción de funcionales. Y diseño de pruebas unitarias e implementación con Junit4',
    skills: []
  },
  {
    id: 3,
    company: 'Optimissa',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Banc Sabadell',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2016-05-31T00:00:00.000Z',
    dateEnd: '2016-07-31T00:00:00.000Z',
    role: 'developer',
    description:
      'Mantenimiento de aplicación web con J2EE (Hibernate, JSF, EJB, Maven, Spring) y evolutivo de aplicación Java con Swing. Base de datos Oracle. Repositorio Subversion',
    skills: []
  },
  {
    id: 2,
    company: '3 & punt',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Media Markt',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2016-02-28T00:00:00.000Z',
    dateEnd: '2016-05-31T00:00:00.000Z',
    role: 'developer',
    description:
      'Gestión de Información de artículos, pedidos, consultas, para Media Markt. Arquitectura del proyecto basada en J2EE, Maven, JUnit, SQL Server, Web services, ficheros XML e Interfaces. Repositorio Git',
    skills: []
  },
  {
    id: 1,
    company: 'E-Tic',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Disalfarm',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2015-04-01T00:00:00.000Z',
    dateEnd: '2016-02-28T00:00:00.000Z',
    role: 'junior developer',
    description:
      'Actualización de código de Borlan C++ a formularios Java y Visual C++, Oracle, PL/SQL.',
    skills: []
  },
  {
    id: 0,
    company: 'I3E',
    companyURL: 'https://atos.net/es/spain',
    customer: 'Atos',
    customerURL: 'https://atos.net/es/spain',
    dateInit: '2014-08-01T00:00:00.000Z',
    dateEnd: '2015-03-31T00:00:00.000Z',
    role: 'junior developer',
    description:
      'Desarrollo en diferentes proyectos tanto en Java, JEE, PHP, .Net Oracle SQLServer, Java Script, Hibernate, Maven, Swing, Apache, IIS, Laravel, etc. Clientes como Aigües de Barcelona, Xarxa Oberta, Merak, etc... Web services, formularios, módulos para Sugar CRM, migración de bases de datos.',
    skills: [
      {
        id: 0,
        name: 'java',
        time: 2592000,
        domain: 'Master'
      },
      {
        id: 1,
        name: 'java',
        time: 2592000,
        domain: 'Master'
      }
    ]
  }
];

describe('CompanyComponent', () => {
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
