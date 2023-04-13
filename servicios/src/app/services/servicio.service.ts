import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  mostrarMensaje(men : string){

    alert(men)
  }
}
