import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
// import { Iuser } from './models/user';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageComponent,
        HomeComponent,
        CardComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('usrLogged Property', () => {
    it(`Should be defined`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.usrLogged).toBeDefined();
    }));

    it(`Should to be falsy`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.usrLogged).toBeFalsy();
    }));
  });

  describe('loginForm Property should be', () => {
    it(`Should be defined`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.loginForm).toBeDefined();
    }));

    it('invalid when empty', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.loginForm.valid).toBeFalsy();
    });

    it('invalid email field validity', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const email = app.loginForm.controls['email'];
      expect(email.valid).toBeFalsy();
    });

    it('email errors is required', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      let errors = {};
      const email = app.loginForm.controls['email'];
      errors = email.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('email errors invalid pattern', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      let errors = {};
      const email = app.loginForm.controls['email'];
      email.setValue('test');
      errors = email.errors || {};
      expect(errors['email']).toBeTruthy();
    });

    it('email errors valid pattern', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      let errors = {};
      const email = app.loginForm.controls['email'];
      email.setValue('test@test.com');
      errors = email.errors || {};
      expect(errors['email']).toBeFalsy();
    });

    it('invalid pass field validity', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const pass = app.loginForm.controls['pass'];
      expect(pass.valid).toBeFalsy();
    });

    it('pass errors is required', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      let errors = {};
      const pass = app.loginForm.controls['pass'];
      errors = pass.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('submitting a form emits a user', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.loginForm.valid).toBeFalsy();
      app.loginForm.controls['email'].setValue('test@test.com');
      app.loginForm.controls['pass'].setValue('123456789');
      expect(app.loginForm.valid).toBeTruthy();

      // let user: Iuser;
      // // Subscribe to the Observable and store the user in a local variable.
      // app.loggedIn.subscribe((value) => user = value);

      // // Trigger the login function
      // app.login();

      // // Now we can check to make sure the emitted value is correct
      // expect(user.email).toBe('test@test.com');
      // // expect(user.pass).toBe('123456789');
    });
  });

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to FNX-FE!');
  // }));
});
