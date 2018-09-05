import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* VARS */
  tags : any = {};
  /* VARS */

  constructor() { }

  ngOnInit() {
    this.tags.companies = 'compañías';
    this.tags.skills = 'habilidades';
    this.tags.domain = 'dominio';
  }

}
