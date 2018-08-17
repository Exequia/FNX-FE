import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IloginFrm } from './models/forms';
import { Iusr } from './models/user';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //VARS
  tags : any = {};
  usrLogged : boolean = false;
  loginForm : FormGroup;
  usr : Iusr;
  mailInvalid;
  passInvalid;
  loading : boolean = false;
  /* VARS */


  constructor(private fb: FormBuilder, private element : ElementRef){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email] ],
      pass: ['', Validators.required ],
    });
  }

  get email() { return this.loginForm.get('email'); }
  get pass() { return this.loginForm.get('pass'); }

  ngOnInit() {
    this.tags.home = 'inicio';
    this.tags.email = 'email';
    this.tags.pass = 'contraseña';
    this.tags.logIn = 'iniciar sessión';
    this.tags.logOut = 'cerrar sessión';
    this.tags.wellcome = 'bienvenido';

    this.tags.invalidRequired = 'es necesario informar el campo';
    this.tags.invalidMail = 'el formato del email introducido no es correcto';
    this.tags.mailInvalid = 'el mail introducido no es válido';
    this.tags.passInvalid = 'la contraseña introducida no es válida';


    // $(function () {
    //   $('#logBtn').popover({
      //     container: 'body',
      //     html: true,
      //     title: 'Inicio de sesión'
      //   })
      // })


    $(function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    });
  }

  //SERVICE
  invokeLogin (login : IloginFrm) {
    this.loading = true;
    let valid : boolean = true;

    if (login.email != 'fnx@fnx.com') {
      valid = false;
      let mail = this.element.nativeElement.querySelector('#email');
      if (mail){
        this.loginForm.patchValue({email:''});
        this.mailInvalid = this.tags.mailInvalid;
      }
    }

    if (login.pass != 'fnxFire') {
      valid = false;
      let pass = this.element.nativeElement.querySelector('#pass');
      if (pass){
        this.loginForm.patchValue({pass:''});
        this.passInvalid = this.tags.passInvalid;
      }
    }

    if (valid) {
      this.mailInvalid = undefined;
      this.passInvalid = undefined;
      this.usr = {
        id: 0,
        name: 'Fénix',
        surname1: 'Fire',
        surname2: '',
        role: 'admin'};
    }

    this.loading = false;
  }

  //FUNCTIONS
  onSubmit(e) {
    if (this.loginForm.status == 'VALID') {
      let login = this.loginForm.value;
      this.invokeLogin(login);
    }
  }
}
