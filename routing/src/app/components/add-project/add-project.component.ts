import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectsService } from 'src/app/services/service-proyects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

   //Inyecto la clase router para usar el routing.navigate
   constructor(private router: Router, private service : ServiceProyectsService) { }

   //Retorna a una nueva ventana 
   verPro() {
     this.router.navigate(['/proyectos'])
   }
 
   nombre : string = ""
   tecnologia : string = ""
   
   //LLAMADA AL SERVICIO PARA COMUNICAR LOS DATOS ENTRE COMPONENTES
   agregarListaProyectos(){
    if(this.nombre.length > 0 && this.tecnologia.length > 0){
     this.service.agregarListaProyectos(this.nombre,this.tecnologia)
     alert("El proyecto ha sido creado")
    }else{
      alert("Por favor rellene ambos campos")
    }
   }
 
}
