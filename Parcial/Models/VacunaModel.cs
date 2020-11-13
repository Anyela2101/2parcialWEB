using System;
using System.Collections.Generic;
using Entity;

namespace Parcial.Models
{
    public class VacunaModel
    {
        public class VacunaInputModel{
            public VacunaInputModel(){

            }
            public string nombreVacuna {get;set;}
            public DateTime fechaVacuna {get;set;}
            public double edadAplicacion {get;set;}
           public string identificacionPersona {get;set;}
        }
        
        public class VacunaViewModel: VacunaInputModel{
            public VacunaViewModel(){
                
            }

            public VacunaViewModel(Vacuna vacuna){
                nombreVacuna = vacuna.NombreVacuna;
                fechaVacuna = vacuna.FechaVacuna;
                edadAplicacion = vacuna.EdadAplicacion;
                identificacionPersona = vacuna.IdentificacionPersona;
            }
        }
    }
}