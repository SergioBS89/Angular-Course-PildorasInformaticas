import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  // USANDO MI SERVICIO EN EL HIJO
  constructor(private myServico : ServicioService){}
texto2: any;
result:any;

takingDatesFromComponent(){
this.result = this.texto2
this.myServico.mostrarMensaje("Triying services with my new mechanic keyboard")
}



}
