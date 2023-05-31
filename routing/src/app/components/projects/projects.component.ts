import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/classes/proyecto.model';
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
  constructor(private service: ServiceProyectsService, private router: Router) { }



  /**
   * With this we get the list of projects from the database dinamically 
   * @ Object.values() to become an array the data form BBDD
   */
  ngOnInit() {
    this.service.getAllProjects().subscribe(myProjects => {
      this.service.listProjects = Object.values(myProjects)

    })
  }

    /**
   * This array save the list of projects from the service dinamically in the ngOnInit
   */
    listProjects = this.service.listProjects

  /**
   * Function to go to the screen add new project
   */
  addNewProject() {
    this.router.navigate(['/add-project'])
  }

  deleteProject(idProject: number) {
    this.service.deleteProject(idProject)
  }

}
