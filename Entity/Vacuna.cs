using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Vacuna
    {
        public Vacuna()
        {
          
        }
        [Key]

        [Column(TypeName = "int")]
        public int VacunaId {get;set;}

        [Column(TypeName = "varchar(10)")]
        public string IdentificacionPersona {get;set;}
        
        [Column(TypeName = "varchar(20)")]
        public string NombreVacuna {get;set;}

        [Column(TypeName = "Date")]
        public DateTime FechaVacuna {get;set;}

         [Column(TypeName = "float")]
        public double EdadAplicacion {get;set;}
        public double CalcularEdadAplicacion(DateTime FechaNacimiento){
            double FechaRestante = FechaVacuna.Subtract(FechaNacimiento).TotalDays;
            FechaRestante/=365;
            EdadAplicacion = FechaRestante;
            return FechaRestante;
        }
    }
}