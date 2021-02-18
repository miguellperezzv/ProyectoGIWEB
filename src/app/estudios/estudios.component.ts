import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios=[
        ["Bachillerato Técnico en Programación de Software", "IED Gerardo Paredes", "Finalizado en 2014", "https://www.redacademica.edu.co/sites/default/files/ESCUDO%20COLEGIO%20GEARDO%20PAREDES%202017_0.png"],
        ["Diplomado Habilidades para la Vida", "Fundación Tecnológica Autónoma Bogotá", "Finalizado en 2019", "https://www.faba.edu.co/wp-content/uploads/2020/03/Logo-web-nuevo-.png"],
        ["Pregrado en Ingeniería de Sistemas", "Universidad Distrital", "En curso", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Escudo_UD.svg/1200px-Escudo_UD.svg.png"]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
