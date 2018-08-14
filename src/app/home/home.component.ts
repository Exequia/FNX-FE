import { Component, OnInit } from '@angular/core';
import { Icard } from '../card/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //VARS
  tags : any = {};
  emailData : any = {};
  arrCards : Array<Icard> = [];
  targetCard : Icard;

  constructor() { }

  ngOnInit() {
    this.tags.albertReal = 'alberto real';
    this.tags.intro = 'En esta página encontrarás información profesional sobre mí y los diferentes proyectos personales que voy realizando y publicando';
    this.tags.moreInfo = 'Si quieres más información, puedes enviar un mail a';
    this.tags.contactMail = 'real.estepa@gmail.com';
    this.tags.contactMailSubject = 'Contacto%20a%20través%20de%20la%20web';
    this.tags.nextTarget = 'próximo Objetivo';
    this.tags.lastUpdates = 'últimas actualizaciones';

    this.emailData.address = 'real.estepa@gmail.com';
    this.emailData.subject = 'Contacto%20a%20través%20de%20la%20web';

    this.targetCard = {
      id:0,
      title:'diagramas de experiencia',
      date:new Date(),
      body:'Generar diferentes diagramas de tiempo para resumir la experiencia laboral',
    };
    this.initCards();
  }

  //Functions
  initCards () {
    let card : Icard = {
      id:0,
      title:'Inauguración web',
      date:new Date(),
      body:'Se actualiza la página y se inagura con nuevas tecnologías destacando Angular 6 en el FrontEnd e Spring Microservices en Back End',
    };
    this.arrCards.push(card);
  }

}
