import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio2Service {

  constructor() { }

  //ARRAY DE DATOS PARA INJECTARLO  A TRVES DE UN SERVICIO
  nombresFutbolistas : string[]=["Toti", "Mascherano", "Messi", "Ronaldo"]

}
