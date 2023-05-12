import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-modi-project',
  templateUrl: './modi-project.component.html',
  styleUrls: ['./modi-project.component.css']
})
export class ModiProjectComponent {

   //Inyection router class to enabled routing
   constructor(private router: Router, private service : ServiceProyectsService) { }

   //Return to a new window
   verPro() {
     this.router.navigate(['/projects'])
   }
 
   namePro: string = ""
   tecnology : string = ""
   year : number = 0
   
   //Call to the service to communicate to each other
   addNewProject(){
    if(this.namePro.length > 0 && this.tecnology.length > 0 && this.year != 0){
     this.service.addToList(this.namePro,this.tecnology, this.year )
     this.router.navigate(['/projects'])
    }
    else if(this.year == 0){
      alert("Year fild cannot be 0")
    }
    else{
      alert("Please refilled all the fields")
    }
   }
 
}
