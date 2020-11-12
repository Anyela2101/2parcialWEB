import {Persona} from './persona';

export class Vacuna {
    constructor() {
        
        this.persona = new Persona();
    }
    nombreVacuna: string;
    fechaVacuna: Date;
    edadAplicacion: number;
    persona: Persona;
}

