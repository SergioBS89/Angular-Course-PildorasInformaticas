import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
//Array que itera el componente padre y envia tambien a hijo
  nombres:string[]=["Jose", "Marc", "Maria", "Sergio", "Susi"];


  //Recogemos los datos de hijo 2

  textoDeHijo2 = ['HEY, SOY EL PADRE!']

  addTexto(nuevoTexto:string){
    this.textoDeHijo2.push(nuevoTexto)
  }
}


