import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

//ENRUTANDO NUESTRA APP
const appRutas: Routes=[
{path:'proyectos', component: ProyectosComponent},
{path:'acercaDeMi', component: AcercaComponent},
{path:'contacto', component: ContactoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    AcercaComponent,
    ContactoComponent
  ],
  // IMPORTANTE IMPORTAR EL ROUTER MODUL    
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
