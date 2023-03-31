import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit{

  //Directiva @Output para mandar info de hijo a padre
  @Output() myNuevoEventoEmmiter = new EventEmitter<string>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addNuevaLineaTexto(value:string){
    this.myNuevoEventoEmmiter.emit(value)
  }

}
