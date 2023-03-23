import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  //Probando clase

  public saludar() {
    
    var name = "Sergio"
    return "What's up " + name;
  }
}
