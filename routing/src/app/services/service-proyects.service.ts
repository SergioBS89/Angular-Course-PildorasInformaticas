import { Injectable } from '@angular/core';
import { Proyecto } from '../components/proyectos/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectsService {

  constructor() { }

 

  //Array de proyectos para inyectarlos en la tabla del HOME
  listaProyectos: Proyecto[] = []

  agregarListaProyectos(nombre:string, tecnologia:string) {  
    this.listaProyectos.push(new Proyecto(nombre,tecnologia))
    }
}
