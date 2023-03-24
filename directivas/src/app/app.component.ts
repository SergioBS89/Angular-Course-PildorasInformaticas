import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas Angular';

  mensaje: any;
  estaRegistrado: boolean = false
  nombre: string = ""

  //USANDO DIRECTIVA IF
  registroUsuario() {

    this.estaRegistrado = true
    this.mensaje = "Usuario " + this.nombre + " registrado con exito"
  }

  //USANDO DIRECTIVA FOR

  // listaPeliculas: object[]
  listaPeliculas = [
    { pelicula: "La guerra de las galaxias" },
    { pelicula: "El señor de los anillos" },
    { pelicula: "La jungla de cristal" },
    { pelicula: "La liga de la justicia" },
    { pelicula: "Harry Potter" },
  ]

}
