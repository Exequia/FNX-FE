import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IloginFrm } from './models/forms';
import { Iuser } from './models/user';

import { UsersService } from './services/users/users.service';
import { Observable } from 'rxjs';

// declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* VARS */
  usrLogged = false;
  loginForm: FormGroup;
  user: Iuser;
  mailInvalid: Observable<any>;
  passInvalid: Observable<any>;
  loading = false;
  /* VARS */

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private element: ElementRef,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es-ES');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es-ES');

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get pass() {
    return this.loginForm.get('pass');
  }

  ngOnInit() {
    // $(function () {
    //   $('#logBtn').popover({
    //     container: 'body',
    //     html: true,
    //     title: 'Inicio de sesión'
    //   })
    // })

    $(function() {
      'use strict';
      window.addEventListener(
        'load',
        function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          const forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          const validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener(
              'submit',
              function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              },
              false,
            );
          });
        },
        false,
      );
    });
  }

  /* SERVICE */
  invokeLogin(login: IloginFrm) {
    this.loading = true;
    let valid = true;

    if (!login.email) {
      valid = false;
      const mail = this.element.nativeElement.querySelector('#email');
      if (mail) {
        this.mailInvalid = this.translate.get('app.mailInvalid');
      } else {
        this.mailInvalid = undefined;
      }
    }

    if (!login.pass) {
      valid = false;
      const pass = this.element.nativeElement.querySelector('#pass');
      if (pass) {
        this.passInvalid = this.translate.get('app.passInvalid');
      } else {
        this.passInvalid = undefined;
      }
    }

    if (valid) {
      this.userService.login(login.email, login.pass).subscribe(user => {
        this.user = user;
        this.loading = false;
      });
    }
  }

  invokeLogout() {
    this.loading = true;
    this.user = this.userService.logout();
    this.loading = false;
  }

  /* FUNCTIONS */
  onSubmit(e) {
    if (this.loginForm.status === 'VALID') {
      const login = this.loginForm.value;
      this.invokeLogin(login);
    }
  }

  logout() {
    if (this.user) {
      this.invokeLogout();
    }
  }
}
