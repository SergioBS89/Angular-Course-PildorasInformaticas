import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../classes/proyecto.model";

@Injectable()
export class DataBaseService {

  constructor(private httpClient: HttpClient) { }

  urlFireBase: string = 'https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data.json'

  /**
   * CREATE
   * @param project 
   */
  saveProjectsInFireBase(project: Project[]) {
    this.httpClient.put(this.urlFireBase, project).subscribe({
      next: (res) => console.log('Project saved ' + res),
      error: (e) => console.log('Error detected ' + e),
    });
  }

  /**
   * SELECT
   * @returns 
   */
  getProjectsFromFireBase() {
    return this.httpClient.get(this.urlFireBase)
  }

  /**
   * UPDATE
   * @param idProject 
   * @param project 
   */
  updateProjectFromFireBase(idProject: number, project: Project) {
    let urlUpdate = 'https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data/' + idProject + '.json'
    this.httpClient.put(urlUpdate, project).subscribe({
      next: (res) => console.log('Project updated ' + res),
      error: (e) => console.log('Error detected ' + e),
    });
  }

  /**
   * DELETE
   * @param idProject 
   */
  deleteProjectFromFireBase(idProject: number) {
    let urlDelete = 'https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data/' + idProject + '.json'
    this.httpClient.delete(urlDelete).subscribe({
      next: (res) => console.log('Project updated ' + res),
      error: (e) => console.log('Error detected ' + e),
    });
  }
}
