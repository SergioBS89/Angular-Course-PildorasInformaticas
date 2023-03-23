import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  //Declaration of variables

  numberOne : number = 0
  numberTwo : number = 0
  result : number = 0

  //Diferents function to operate 

  sum(): number{

   this.result = this.numberOne + this.numberTwo 
   return this.result
  }
  rest(): number{

    this.result = this.numberOne - this.numberTwo 
    return this.result
   }
  
}

