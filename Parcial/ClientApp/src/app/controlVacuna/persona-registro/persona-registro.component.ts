import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonaService} from '../../services/persona.service';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  formGroup: FormGroup;
  persona: Persona;
  constructor(private personnaService: PersonaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.persona = new Persona();
    this.buildForm();
  }
  private buildForm(){
    this.persona.tipoDocumento ='';
    this.persona.identificacion='';
    this.persona.nombre='';
    this.persona.fechaNacimiento= new Date(Date.now());
    this.persona.institucionEducativa ='';
    this.persona.nombreAcudiente='';
    this.formGroup = this.formBuilder.group({
      tipoDocumento: [this.persona.tipoDocumento, [Validators.required, Validators.min(1)]],
      identificacion: [this.persona.identificacion,Validators.required],
      nombre: [this.persona.nombre, Validators.required],
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
        alert('persona creada');
        this.persona =p;
      }
    });
  }

}
