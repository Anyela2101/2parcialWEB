import { Component, OnInit } from '@angular/core';
import {PersonaService} from 'src/app/services/persona.service';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Persona} from '../models/persona';
import { Vacuna } from '../models/vacuna';
import { VacunaService } from 'src/app/services/vacuna.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';


@Component({
  selector: 'app-vacuna-registra',
  templateUrl: './vacuna-registra.component.html',
  styleUrls: ['./vacuna-registra.component.css']
})
export class VacunaRegistraComponent implements OnInit {
  formGroup: FormGroup;
  vacuna : Vacuna;
  personas: Persona[];
  persona: Persona;
  searchText:string;

  constructor(private personaService:PersonaService, private vacunaService: VacunaService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.vacuna = new Vacuna();
    this.persona = new Persona();
    this.persona.tipoDocumento ='';
    this.persona.identificacion ='';
    this.persona.nombreEstudiante ='';
    this.persona.fechaNacimiento = new Date(Date.now());
    this.persona.institucionEducativa ='';
    this.persona.nombreAcudiente ='';
    this.buildForm();
  }

  buscar(){
    this.personaService.buscarPersona(this.searchText).subscribe(result =>{
      this.persona = result;
    });
    
  }

  private buildForm(){
    this.vacuna.nombreVacuna ='';
    this.vacuna.fechaVacuna =new Date(Date.now());
    this.formGroup = this.formBuilder.group({
      nombreVacuna: [this.vacuna.nombreVacuna, Validators.required],
      fechaVacuna: [this.vacuna.fechaVacuna,[Validators.required, Validators.min(1)]]
    });
  }

  get control(){
    return this.formGroup.controls;
  }
  onSubmit(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
  }
  add(){
    this.vacuna = this.formGroup.value;
    this.vacuna.identificacionPersona = this.persona.identificacion;

    this.vacunaService.post(this.vacuna).subscribe(p =>{
      if(p!=null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Vacuna Registrada!!! :-)';

        this.vacuna =p;
      }
    });
  }

}
