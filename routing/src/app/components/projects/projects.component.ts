import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  //Inyecto la clase router para usar el routing.navigate
  constructor(private service: ServiceProyectsService, private router: Router) { }

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
