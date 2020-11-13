import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonaService} from '../../services/persona.service';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  formGroup: FormGroup;
  persona: Persona;
  constructor(private personnaService: PersonaService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.persona = new Persona();
    this.buildForm();
  }
  private buildForm(){
    this.persona.tipoDocumento ='';
    this.persona.identificacion='';
    this.persona.nombreEstudiante='';
    this.persona.fechaNacimiento= new Date(Date.now());
    this.persona.institucionEducativa ='';
    this.persona.nombreAcudiente='';
    this.formGroup = this.formBuilder.group({
      tipoDocumento: [this.persona.tipoDocumento, [Validators.required, Validators.min(1)]],
      identificacion: [this.persona.identificacion,Validators.required],
      nombreEstudiante: [this.persona.nombreEstudiante, Validators.required],
      fecha: [this.persona.fechaNacimiento, [Validators.required, Validators.min(1)]],
      institucionEducativa: [this.persona.institucionEducativa, Validators.required],
      nombreAcudiente: [this.persona.nombreAcudiente, Validators.required]
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
    this.persona = this.formGroup.value;
    this.personnaService.post(this.persona).subscribe(p =>{
      if(p!=null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada!!! :-)';

        this.persona =p;
      }
    });
  }

}
