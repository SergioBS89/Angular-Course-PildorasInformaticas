import { Injectable } from '@angular/core';
import { Proyecto } from '../components/proyectos/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectsService {

  constructor() { }

  //Array of projects to inyect in different places
  listaProyectos: Proyecto[] = []

  addToList(name:string, tecnology:string, year : number) {  
    this.listaProyectos.push(new Proyecto(name,tecnology, year))
    }
  
   //This variable changes its value depending if the user is creating or updating a project
   createOrModify: string = "en proceso";
}
