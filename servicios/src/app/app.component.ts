import { Component } from '@angular/core';
import { ServicioService } from './services/servicio.service';
import { Servicio2Service } from './services/servicio2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



    //INJECTANDO SERVICIOS CON EL CONSTRUCTOR
    constructor(private myServicio : ServicioService, private myServicio2 : Servicio2Service){}


    texto: any;

    agregaTexto(text: string) {
      this.texto = text
      this.myServicio.mostrarMensaje("Probando los servicos con mi nuevo teclado mecanico")
      }
    
      nombresFutbolistasEpoca : string[] = this.myServicio2.nombresFutbolistas

}
