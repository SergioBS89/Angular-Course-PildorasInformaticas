import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // styleUrls: ['./empleado.component.css'],
  
})
export class EmpleadoComponent implements OnInit {



constructor(){}

  ngOnInit(): void {
      
  }

  currentWorker = "Sergio Berdiell Sanchez"

  //Ejemplo de creación de un empleado 
  rango = "L1"
  empresa="Gft"
  puesto="backend developer"

  //Ejemplo dinamico cambiando el valor de la edad
  edad = 33
  
  cambio = this.edad > 30 ? "Wow you looks younger man, like 25" : "You are still a baby"

  //Privatizando el uso de variables como en POO

  private exp = 1

  getExp(){
    return this.exp;
  }
  altura=1.85
  resultadoPeso = ""
  boton=true
  //Creando la funcion para obtener el valor peso del usuario
  getPeso(arg0: number) {
    this.resultadoPeso = ", what a fat guy"  
  
  }
  //Habilito boton dinamicamente cuando el usuario escribe el peso
  habilitarBoton(){
    this.boton=false
  }

  //Properties binding

  color="red"
  login="Press to login"

  cambiaColor(){
    if(this.color == "red"){
      this.color = "green"
      this.login = "Press to unlog"
    }else{
      this.color ="red"
      this.login="Press to login"
    }    
  }

  //Eventos 

  valor= ""
  cambiar(event: Event) {
    
    //Acceso al radio button 

    if ((<HTMLInputElement>event.target).value == "1") {
      this.valor = "false"
    }else{
      this.valor= "true"
    }
    
    }

  // 2 ways binding
  two_binding="Hello word!";
}
