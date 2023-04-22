import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './proyecto.model';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  //Inyecto la clase router para usar el routing.navigate
  constructor(private service: ServiceProyectsService, private router: Router) { }

  listaProyectos = this.service.listaProyectos

  //Boton para volver a crear nuevo proyecto
  crearPro() {
    this.router.navigate(['/add-project'])
    this.service.createOrModify="Create"
  }
  //Update the value of the button in the service
  updateButton() {
    this.service.createOrModify = "Update"
    }

}
