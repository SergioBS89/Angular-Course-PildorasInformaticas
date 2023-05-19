import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Inyection of services and routes
   * @param router 
   * @param alertService 
   */
  constructor(private router: Router, private alertService : AlertService) { }

  
/**
 * Functions to use the routing with the header buttons
 */
  seeMysProjects() {
    this.router.navigate(['/'])
  }
  seeAddProject() {
    this.router.navigate(['/add-project'])
  }

  //LOGICAL CODE TO USE ALERT POPUP
  showAlert = false; //Hide or show the alert
  textAlert : string = ""  
   //Color alert 
   colorBackgroundAlert = ""
  //This is the listener of the alert, so when the user press the button the alert is displayed
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
