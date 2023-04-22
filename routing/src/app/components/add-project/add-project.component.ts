import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {


   //Inyection router class to enabled routing
   constructor(private router: Router, private service : ServiceProyectsService) { }

   //Return to a new window
   verPro() {
     this.router.navigate(['/proyectos'])
   }
 
   namePro: string = ""
   tecnology : string = ""
   year : number = 0
   
   //Call to the service to communicate to each other
   addNewProject(){
    if(this.namePro.length > 0 && this.tecnology.length > 0 && this.year != 0){
     this.service.addToList(this.namePro,this.tecnology, this.year )
     this.router.navigate(['/proyectos'])
    }
    else if(this.year == 0){
      alert("Year fild cannot be 0")
    }
    else{
      alert("Please refilled all the fields")
    }
   }

    //This variable take the value from the service to show create or update
    createOrModify: string = this.service.createOrModify;
 
}
