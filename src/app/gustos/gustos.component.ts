import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustos',
  templateUrl: './gustos.component.html',
  styleUrls: ['./gustos.component.css']
})
export class GustosComponent implements OnInit {

  pelicula1 = ["Parasitos", "https://i.ytimg.com/vi/-PtU49Aol00/maxresdefault.jpg"]
  pelicula2 = ["El Irlandés", "https://i.ytimg.com/vi/B3cJXk9IaH0/maxresdefault.jpg"]
  pelicula3 = ["A Star Is Born", "https://i.ytimg.com/vi/nSbzyEJ8X9E/maxresdefault.jpg"]

  musica1 =["After Hours", "The Weeknd", "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"]
  musica2 =["Melodrama", "Lorde" ,"https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336"]
  musica3 =["Apollo XXI", "Steve Lacy" ,"https://i.scdn.co/image/ab67616d0000b2739b791593e61e77e9a1c092fa"]

  constructor() { }

  ngOnInit(): void {
  }

}
