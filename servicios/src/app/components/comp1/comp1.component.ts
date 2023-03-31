import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() sendingText = new EventEmitter<string>();

  sendTextoToFather(value: string) {
    this.sendingText.emit(value)
  }
}
