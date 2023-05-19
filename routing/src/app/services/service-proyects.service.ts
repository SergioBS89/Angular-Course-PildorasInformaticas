import { Injectable } from '@angular/core';
import { Project } from '../classes/proyecto.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectsService {


  constructor( private database : DataBaseService) { }

  //Array of projects 
  listProjects: Project[] = []
  // = [{
  //   id: 1,
  //   namePro: "Course Angular",
  //   tecnology: "Angular",
  //   year: 2023
  // },
  // {
  //   id: 2,
  //   namePro: "Api rest harry potter",
  //   tecnology: "Spring Boot",
  //   year: 2022
  // },
  // {
  //   id: 3,
  //   namePro: "Portfolio web",
  //   tecnology: "Html,Css and Js",
  //   year: 2021
  // },
  // {
  //   id: 4,
  //   namePro: "Junit course",
  //   tecnology: "Java",
  //   year: 2023
  // }]

  /**
   * Add to the array a new project increasindg in one the id property
   */
  addToList(name: string, tecnology: string, year: number) {
    let idProject: number = 0
    idProject = this.listProjects.length + 1
    this.listProjects.push(new Project(idProject, name, tecnology, year))
    this.database.saveProjectsInFireBase(this.listProjects)
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
    //For iteration to reassign the values of each projects' id 
    for (let i = 0; i < this.listProjects.length; i++) {
      this.listProjects[i].id = (i + 1)
    }
  };

}



