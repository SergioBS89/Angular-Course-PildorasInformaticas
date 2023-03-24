export class Persona{

    nombre:string = "";
    apellido:string = "";
    edad:number = 0;
    nacionalidad:string = ""

   

    constructor(name:string, apellido:string, edad: number, nacionalidad:string){

        this.nombre = name;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;        
    }

}