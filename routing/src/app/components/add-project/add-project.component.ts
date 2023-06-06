import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
    
  /**
   * With this we get the list of projects from the database dinamically 
   * @ Object.values() to become an array the data form BBDD
   */
  ngOnInit() {
    
    this.service.getAllProjects().subscribe(myProjects => {
    this.service.listProjects = Object.values(myProjects)
    })
  }

   //Inyection router class to enabled routing, and both services 
   constructor(private router: Router, private service : ServiceProyectsService, private alertService : AlertService) { }

 
   /**
    * List of properties class projects
    */
   namePro: string = ""
   technology : string = ""
   year : number = 0
   
   /**
    * Call to the service to communicate to each other
    */
   addNewProject(){
    if(this.namePro.length > 0 && this.technology.length > 0 && this.year != 0){
     this.service.addToList(this.namePro,this.technology, this.year )
     this.alertService.showAlert("Project created successfully", 3000, "alert-primary") //Method to call the alert
     this.router.navigate(['/'])
    }
    else if(this.namePro.length == 0){
      this.alertService.showAlert("The field 'Project name' should be refilled", 4000, "alert-warning") //Method to call the alert
    }
    else if(this.technology.length == 0){
      this.alertService.showAlert("The field 'Technology used' should be refilled", 4000, "alert-warning") //Method to call the alert
    }
    else{
      this.alertService.showAlert("The field 'Year' cannot be 0", 4000, "alert-danger") //Method to call the alert
    }
   }
 
}
