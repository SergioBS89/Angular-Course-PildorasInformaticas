import { Injectable } from '@angular/core';
import { Project } from '../classes/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectsService {

  constructor() { }

  //Array of projects to inyect in different places
  listaProyectos: Project[] = []

  //Index of projects is incremented every time that a project is added
  indexProject : number = 0

  //TODO CREAR CONSTRUCTOR CON ID E INCREMENTARLO AQUI
  addToList(name:string, tecnology:string, year : number) {  
    this.indexProject++
    this.listaProyectos.push(new Project(this.indexProject,name,tecnology, year))
    }
}
