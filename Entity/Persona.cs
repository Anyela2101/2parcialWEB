using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Persona
    {
        [Column(TypeName = "varchar(11)")]
        public string TipoDocumento {get;set;}
        [Key]
        [Column(TypeName = "varchar(10)")]
        public string Identificacion {get;set;}
        [Column(TypeName = "varchar(20)")]
        public string NombreEstudiante {get;set;}
        [Column(TypeName = "Date")]
        public DateTime FechaNacimiento {get;set;}
         [Column(TypeName = "varchar(30)")]
        public string InstitucionEducativa {get;set;}
         [Column(TypeName = "varchar(20)")]
        public string NombreAcudiente {get;set;}
    }
}
