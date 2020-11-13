using System;
using System.Collections.Generic;
using Entity;

namespace Parcial.Models
{
    public class PersonaModel
    {
        public class PersonaInputModel{
            public PersonaInputModel()
            {
                
            }
            public string tipoDocumento {get;set;}
            public string identificacion {get;set;}
            public string nombreEstudiante {get;set;}
            public DateTime fechaNacimiento {get;set;}
            public string institucionEducativa {get;set;}
            public string nombreAcudiente {get;set;}
        }
        public class PersonaViewModel : PersonaInputModel{
            public PersonaViewModel (Persona persona){
                tipoDocumento = persona.TipoDocumento;
                identificacion = persona.Identificacion;
                nombreEstudiante = persona.NombreEstudiante;
                fechaNacimiento = persona.FechaNacimiento;
                institucionEducativa = persona.InstitucionEducativa;
                nombreAcudiente = persona.NombreAcudiente;
            }
        }
    }
}