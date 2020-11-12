import {PersonaRegistroComponent} from './controlVacuna/persona-registro/persona-registro.component';
import {PersonaConsultaComponent} from './controlVacuna/persona-consulta/persona-consulta.component';
import {VacunaRegistraComponent} from './controlVacuna/vacuna-registra/vacuna-registra.component';
import {VacunaConsultaComponent} from './controlVacuna/vacuna-consulta/vacuna-consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {
    path: 'personaConsulta',
    component: PersonaConsultaComponent
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  },
  {
    path: 'vacunaRegistro',
    component: VacunaRegistraComponent
  },
  {
    path: 'vacunaConsulta',
    component: VacunaConsultaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
