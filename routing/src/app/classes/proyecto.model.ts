export class Project {
    id:number = 0
    namePro: string = "";
    tecnology: string = "";
    year: number = 0;



    constructor(id: number, name: string, tecnology: string, year: number) {
        
        this.id = id
        this.namePro = name;
        this.tecnology = tecnology;
        this.year = year;
    }

}