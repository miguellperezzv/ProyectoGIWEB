import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent implements OnInit {

  lenguajes=[
    ["Java", "fab fa-java", 90],
    ["Python", "fab fa-python", 90],
    ["JavaScript", "fab fa-js-square", 70],
    ["SQL", "fas fa-database", 90],
    ["HTML", "fab fa-html5", 70]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
