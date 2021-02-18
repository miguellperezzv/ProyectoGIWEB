import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valores=[
    ["Empatía", "fas fa-handshake"],
    ["Resiliencia", "fas fa-child"],
    ["Cooperación", "fas fa-hands-helping"],
    ["Responsabilidad", "fas fa-check-double"],
  ]
  title = 'Presentación';
  user = 'Miguel'
}
