import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceProyectsService } from './services/service-proyects.service';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ModiProjectComponent } from './components/modi-project/modi-project.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AlertService } from './services/alert.service';
import {HttpClientModule} from '@angular/common/http'
import { DataBaseService } from './services/data-base.service';

/**
 * Enrouting our App
 */
const appRutas: Routes = [
  { path: '', component: ProjectsComponent},
  { path: 'add-project', component: AddProjectComponent},
  { path: 'update-project/:id', component: ModiProjectComponent },
  // Error page route (important! this path should be always the last one to work properly)
  { path: '**', component: ErrorPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ModiProjectComponent,
    AddProjectComponent,
    ProjectsComponent,
    ErrorPageComponent
  ],

  /**
   *  Important inyect router modul to enable routing
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRutas),
    FormsModule,
    HttpClientModule
  ],
  /**
   * Inyect in here new services
   */
  providers: [ServiceProyectsService, AlertService, DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
