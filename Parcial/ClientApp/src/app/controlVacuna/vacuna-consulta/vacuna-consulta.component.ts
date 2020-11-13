import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VacunaService} from '../../services/vacuna.service';
import {Vacuna} from '../models/vacuna';


@Component({
  selector: 'app-vacuna-consulta',
  templateUrl: './vacuna-consulta.component.html',
  styleUrls: ['./vacuna-consulta.component.css']
})
export class VacunaConsultaComponent implements OnInit {
  vacunas:Vacuna[];
  searchText:string;
  constructor(private vacunaService:VacunaService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.vacunaService.get().subscribe(result =>{
      this.vacunas = result;
    });
  }

}
