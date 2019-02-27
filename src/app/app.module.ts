import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloWrld } from './component/firstComponent';
import { SecondComponentComponent } from './second-component/second-component.component';
import { UserComponent } from './user/user.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LlamadaApiComponent } from './llamada-api/llamada-api.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Route} from '@angular/router';
const routes: Route[] = [

  {path:'',component :AppComponent },
  {path: 'about', component: AboutComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HelloWrld,
    SecondComponentComponent,
    UserComponent,
    PersonaComponent,
    FormularioComponent,
    LlamadaApiComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
