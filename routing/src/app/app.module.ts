import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceProyectsService } from './services/service-proyects.service';
import { AddProjectComponent } from './components/add-project/add-project.component';

//ENRUTANDO NUESTRA APP
const appRutas: Routes=[
{path:'proyectos', component: ProyectosComponent},
{path:'add-project', component: AddProjectComponent},
{path:'contacto', component: ContactoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  // IMPORTANTE IMPORTAR EL ROUTER MODUL    
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRutas),
    FormsModule
  ],
  providers: [ServiceProyectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
