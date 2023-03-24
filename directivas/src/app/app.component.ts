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

  registroUsuario() {

    this.estaRegistrado = true
    this.mensaje = "Usuario " + this.nombre + " registrado con exito"
  }
}
