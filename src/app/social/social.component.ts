import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  redes = [
           ["fab fa-github-square","https://www.fb.com/miguellperezzz"], 
           ["fab fa-twitter-square", "https://www.twitter.com/luisym98"],
           ["fab fa-github-square", "https://www.github.com/miguellperezzv"],
           ["fab fa-linkedin", "https://www.linkedin.com/in/luis-miguel-p%C3%A9rez-valderrama-a1692b1b5/"],
           ["fab fa-lastfm-square", "https://www.last.fm/user/miguellperezz"],
           
          ];
  constructor() { }

  ngOnInit(): void {
  }

}
