import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/classes/proyecto.model';
import { AlertService } from 'src/app/services/alert.service';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-modi-project',
  templateUrl: './modi-project.component.html',
  styleUrls: ['./modi-project.component.css']
})
export class ModiProjectComponent {

  /**
   * @param router This enables the routing 
   * @param service This inyects the service 
   * @param activeRoute This enebles de actives routes to get valued from the url
   * @param alertService This inyects the service alert
   */
  constructor(private router: Router, private service: ServiceProyectsService, private activeRoute: ActivatedRoute, private alertService: AlertService) { }

  idProject: number = 0

  ngOnInit(): void {

    /**
     * This get the id of the project from the url to be modificated
     */
    this.idProject = this.activeRoute.snapshot.params['id']

    let project: Project = this.service.getProject(this.idProject)

    this.namePro = project.namePro
    this.technology = project.tecnology
    this.year = project.year
  }

  /**
   * List of properties of entity project
   */
  namePro: string = ""
  technology: string = ""
  year: number = 0

  /**
   * Call the service to communicate to each other
   */
  updateProject() {
    if (this.namePro.length > 0 && this.technology.length > 0 && this.year != 0) {
      this.service.setProject(new Project(this.idProject, this.namePro, this.technology, this.year))
      this.alertService.showAlert("Project updated", 3000, "alert-primary") //Method to call the alert
      this.router.navigate(['/'])
    }
    else if (this.namePro.length == 0) {
      this.alertService.showAlert("The field 'Project name' should be refilled", 4000, "alert-warning") //Method to call the alert
    }
    else if (this.technology.length == 0) {
      this.alertService.showAlert("The field 'Technology used' should be refilled", 4000, "alert-warning") //Method to call the alert
    }
    else {
      this.alertService.showAlert("The field 'Year' cannot be 0", 4000, "alert-danger") //Method to call the alert
    }
  }

}
