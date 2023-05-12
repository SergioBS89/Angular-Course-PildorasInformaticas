export class Alert {
    message: string = "";
    time: number = 0;
    style: string = "";



    constructor(message: string, time: number, style: string) {
        this.message = message
        this.time = time
        this.style = style
    }

}