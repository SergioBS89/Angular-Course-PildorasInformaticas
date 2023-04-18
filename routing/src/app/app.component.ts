import { Component} from '@angular/core';
import { Proyecto } from './components/proyectos/proyecto.model';
import { ServiceProyectsService } from './services/service-proyects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Inyecto la clase router para usar el routing.navigate
  constructor(private router: Router ){}
 
//CREANDO ROUTING PARA LOS BOTONES DEL HEADER

verContacto(){
  this.router.navigate(['/contacto'])
}
verMisProyectos(){
  this.router.navigate(['/proyectos'])
}
veAgregarProyectos(){
  this.router.navigate(['/add-project'])
}

}
