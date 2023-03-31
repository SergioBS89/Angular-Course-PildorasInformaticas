import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {


  //PARA ESTE EJERCICIO, DESABILITAMOS EL "strictPropertyInitialization" y asi evitar tener que inicializar variables. (file tsconfig.json)

  //DIRECTIVA @INPUT (recibomos datos del padre)
  @Input() itemParaCompHijo : string
}
