import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioJrmbComponent } from './components/formulario-jrmb/formulario-jrmb.component';
import { ListadoNoticiasJrmbComponent } from './components/listado-noticias-jrmb/listado-noticias-jrmb.component';
import { NavbarJrmbComponent } from './components/navbar-jrmb/navbar-jrmb.component';
import { SpinnerJrmbComponent } from './shared/spinner-jrmb/spinner-jrmb.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioJrmbComponent,
    ListadoNoticiasJrmbComponent,
    NavbarJrmbComponent,
    SpinnerJrmbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
