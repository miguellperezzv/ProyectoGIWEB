import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {


  idiomas=[
    ["Ingles", "100", "90", "60"]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
