import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SocialComponent } from './social/social.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { GustosComponent } from './gustos/gustos.component';
import { LenguajeComponent } from './lenguaje/lenguaje.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { ReferenciaComponent } from './referencia/referencia.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SocialComponent,
    EstudiosComponent,
    GustosComponent,
    LenguajeComponent,
    IdiomaComponent,
    ReferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
