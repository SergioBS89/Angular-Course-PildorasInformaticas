import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Inyecto la clase router para usar el routing.navigate
  constructor(private router: Router, private alertService : AlertService) { }

  //CREANDO ROUTING PARA LOS BOTONES DEL HEADER

  seeContact() {
    this.router.navigate(['/contact'])
  }
  seeMysProjects() {
    this.router.navigate(['/projects'])
  }
  seeAddProject() {
    this.router.navigate(['/add-project'])
  }

  //LOGICAL CODE TO USE ALERT POPUP
  showAlert = false; //Hide or show the alert
  textAlert : string = ""  
   //Color alert 
   colorBackgroundAlert = ""
  //This is the listener of the alert, so when the user press the button (in this case the validation of field creating a new project), it shows the alert
  ngOnInit(){
    this.alertService.alert$.subscribe((result : any) => {
      this.showAlert = true
      this.textAlert = result.message
      this.colorBackgroundAlert = result.style
      setTimeout(()=>{
        this.showAlert = false
      }, result.time)
    })
  
  }
}
