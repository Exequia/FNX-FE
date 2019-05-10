import { Component, OnInit, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IloginFrm } from './models/forms'
import { Iuser } from './models/user'

import { UsersService } from './services/users/users.service'

declare var jquery: any
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //VARS
  tags: any = {}
  usrLogged: boolean = false
  loginForm: FormGroup
  user: Iuser
  mailInvalid
  passInvalid
  loading: boolean = false
  /* VARS */

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private element: ElementRef,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    })
  }

  get email() {
    return this.loginForm.get('email')
  }
  get pass() {
    return this.loginForm.get('pass')
  }

  ngOnInit() {
    this.tags.initApp = 'inicio de la aplicación'
    this.tags.home = 'inicio'
    this.tags.email = 'email'
    this.tags.pass = 'contraseña'
    this.tags.logIn = 'iniciar sessión'
    this.tags.logOut = 'cerrar sessión'
    this.tags.wellcome = 'bienvenido'

    this.tags.invalidRequired = 'es necesario informar el campo'
    this.tags.invalidMail = 'el formato del email introducido no es correcto'
    this.tags.mailInvalid = 'el mail introducido no es válido'
    this.tags.passInvalid = 'la contraseña introducida no es válida'

    this.tags.experience = 'experiencia'
    this.tags.studies = 'estudios'
    this.tags.professional = 'profesional'
    this.tags.downloadCV = 'descargar CV'
    this.tags.github = 'github'

    // $(function () {
    //   $('#logBtn').popover({
    //     container: 'body',
    //     html: true,
    //     title: 'Inicio de sesión'
    //   })
    // })

    $(function() {
      'use strict'
      window.addEventListener(
        'load',
        function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation')
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener(
              'submit',
              function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault()
                  event.stopPropagation()
                }
                form.classList.add('was-validated')
              },
              false,
            )
          })
        },
        false,
      )
    })
  }

  //SERVICE
  invokeLogin(login: IloginFrm) {
    this.loading = true
    let valid: boolean = true

    if (!login.email) {
      valid = false
      let mail = this.element.nativeElement.querySelector('#email')
      if (mail) {
        this.mailInvalid = this.tags.mailInvalid
      } else {
        this.mailInvalid = undefined
      }
    }

    if (!login.pass) {
      valid = false
      let pass = this.element.nativeElement.querySelector('#pass')
      if (pass) {
        this.passInvalid = this.tags.passInvalid
      } else {
        this.passInvalid = undefined
      }
    }

    if (valid) {
      this.userService.login(login.email, login.pass).subscribe(user => {
        this.user = user
        this.loading = false
      })
    }
  }

  invokeLogout() {
    this.loading = true
    this.user = this.userService.logout()
    this.loading = false
  }

  //FUNCTIONS
  onSubmit(e) {
    if (this.loginForm.status == 'VALID') {
      let login = this.loginForm.value
      this.invokeLogin(login)
    }
  }

  logout() {
    if (this.user) {
      this.invokeLogout()
    }
  }
}
