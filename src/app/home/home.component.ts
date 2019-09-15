import { Component, OnInit } from '@angular/core';
import { Icard } from '../card/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // VARS
  emailData: any = {};
  arrCards: Icard[] = [];
  targetCard: Icard;

  constructor() {}

  ngOnInit() {
    this.emailData.address = 'real.estepa@gmail.com';
    this.emailData.subject = 'Contacto%20a%20través%20de%20la%20web';

    this.targetCard = {
      id: 0,
      title: 'diagramas de experiencia',
      date: new Date(),
      body:
        'Generar diferentes diagramas de tiempo para resumir la experiencia laboral'
    };
    this.initCards();
  }

  // Functions
  initCards() {
    const card: Icard = {
      id: 0,
      title: 'Inauguración web',
      date: new Date(),
      body:
        'Se actualiza la página y se inagura con nuevas tecnologías destacando' +
        ' Angular 6 en el FrontEnd y Microservices con Java 11  y springboot en el Back End'
    };
    this.arrCards.push(card);
  }
}
