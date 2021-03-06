import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaConsultaComponent } from './controlVacuna/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './controlVacuna/persona-registro/persona-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { VacunaConsultaComponent } from './controlVacuna/vacuna-consulta/vacuna-consulta.component';
import { VacunaRegistraComponent } from './controlVacuna/vacuna-registra/vacuna-registra.component';
import { PersonaService } from './services/persona.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { FiltroVacunaPipe } from './pipe/filtro-vacuna.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent,
    VacunaConsultaComponent,
    VacunaRegistraComponent,
    AlertModalComponent,
    FiltroVacunaPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
