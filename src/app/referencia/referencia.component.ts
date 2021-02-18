import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent implements OnInit {

  referencias= [
    ["Jhon Acevedo", "Producción de Sonido y Audiovisual", "mailto:jeasaccount@gmail.com","https://twitter.com/jeasaccount"],
    ["Lizeth Velasco", "Ingeniera de Sistemas", "mailto:lizeth@gmail.com","https://twitter.com/LaliVelascoM"]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
