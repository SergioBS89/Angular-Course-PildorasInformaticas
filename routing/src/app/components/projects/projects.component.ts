import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/classes/proyecto.model';
import { AlertService } from 'src/app/services/alert.service';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  /**
   * Inyection of services
   * @param service 
   * @param router
   */
  constructor(private service: ServiceProyectsService, private router: Router, private alertService : AlertService) {}

    /**
   * This array save the list of projects from the service dinamically in the ngOnInit
   */
  ngOnInit(){
    this.listProjects = this.service.listProjects

    if(this.service.listProjects.length == 0){
      this.service.getAllProjects().subscribe(myProjects => {
        this.listProjects = Object.values(myProjects)
        })
        }
        
  }
    listProjects: Project[] = []

  /**
   * Function to go to the screen add new project
   */
  addNewProject() {
    this.router.navigate(['/add-project'])
  }

  deleteProject(idProject: number) {
    this.service.deleteProject(idProject)
    this.alertService.showAlert("Project deleted", 3000, "alert-danger") //Method to call the alert
  }
}
