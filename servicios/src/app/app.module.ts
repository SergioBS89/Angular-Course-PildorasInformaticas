import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { FormControlDirective, FormsModule } from '@angular/forms';
import { ServicioService } from './services/servicio.service';
import { Servicio2Service } from './services/servicio2.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
// providers place to inject services
  providers: [ServicioService, Servicio2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
