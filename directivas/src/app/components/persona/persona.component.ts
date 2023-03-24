import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {


  //CREAMOS UN ARRAY DE LA CLASE PERSONA PARA ALMACENARLAS

personas: Persona[] = [

  new Persona("Sergio", "Berdiell", 33, "España"),
  new Persona("Luis", "Segura", 59, "Mexico"),
  new Persona("Katy", "Jameson", 22, "United States")
];

nombre:string=""
apellido:string=""
edad:number=0
nacionalidad:string=""

//Metodo que almacena los datos dentro del array

saveDates() {
  let nuevaPersona = new Persona(this.nombre,this.apellido,this.edad,this.nacionalidad)
  // this.personas[this.personas.length] = nuevaPersona
  this.personas.push(nuevaPersona)
  }

}
