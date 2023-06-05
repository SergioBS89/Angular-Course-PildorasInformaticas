import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../classes/proyecto.model";

@Injectable()
export class DataBaseService {

  constructor(private httpClient: HttpClient) { }

  urlFireBase: string = 'https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data.json'
  /**
   * This service is connected with firebase to do a PUT
   * @param project 
   */
  saveProjectsInFireBase(project: Project[]) {
    this.httpClient.put(this.urlFireBase, project).subscribe({
      next: (res) => console.log('Project saved ' + res),
      error: (e) => console.log('Error detected ' + e),
    });
  }

  getProjectsFromFireBase() {
    return this.httpClient.get(this.urlFireBase)
  }

  updateProjectFromFireBase(idProject: number, project : Project){
    let urlUpdate = 'https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data' + idProject + '.json'
    this.httpClient.put(urlUpdate, project).subscribe({
      next: (res) => console.log('Project updated ' + res),
      error: (e) => console.log('Error detected ' + e),
    });
  }
}
