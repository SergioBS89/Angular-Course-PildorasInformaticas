import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../classes/proyecto.model";

@Injectable()
export class DataBaseService{
    
    constructor(private httpClient: HttpClient){}

    saveProjectsInFireBase(project: Project[]){            
        this.httpClient.put('https://projects-app-sbs-default-rtdb.europe-west1.firebasedatabase.app/data.json', project).subscribe({
            next: (res) => console.log('Project saved ' + res),
            error: (e) => console.log('Error detected' + e),
          });
        }
    }
