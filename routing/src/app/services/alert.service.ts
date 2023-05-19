import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../classes/alert.model';

@Injectable({
  providedIn: 'root'
})

/**
 * THIS SERVICES MANAGE THE ALERT
 */
export class AlertService {

  //Observable 
  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() { }

  showAlert(message: string, time: number, style: string) {
    //passing by parameter an object with the message, time and style to the alert
    this.alertSource.next(new Alert(message, time, style))
  }
}
