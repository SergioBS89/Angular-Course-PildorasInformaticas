import { Injectable } from '@angular/core';
import { Project } from '../classes/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectsService {


  constructor() { }

  //Array of projects 
  listProjects: Project[] = [{
    id: 1,
    namePro: "Angular course",
    tecnology: "Angular",
    year: 2023
  }]

  indexProject: number = 0

  /**
   * Add to the array a new project
   */
  addToList(name: string, tecnology: string, year: number) {
    this.indexProject = this.listProjects.length + 1 //Update the id property every time
    this.listProjects.push(new Project(this.indexProject, name, tecnology, year))
  }

  /**
   * This function use the id value to get the position of the array list projects
   * @param idProject This is the project id will be modified
   */
  getProject(idProject: number): Project {
    let project = this.listProjects[idProject - 1]
    return project
  }

  /**
   * Set the values of the projects
   * @param project This is the object
   */
  setProject(project: Project): void {
    this.listProjects[project.id - 1] = project
  }

  /**
   * Function to delete a project from the array
   * @param idProject Take the value id of the project to be removed
   */
  deleteProject(idProject: number): void {
    this.listProjects.splice(idProject - 1, 1)

    //This for decrease 1 to every id property in the array except the first one
    this.listProjects.forEach(element => {
      if (element.id != 1) {
        element.id--
      }
    });

  }
}


