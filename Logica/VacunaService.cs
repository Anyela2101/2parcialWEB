using System.Security.Permissions;
using System.Security.AccessControl;
using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Logica
{
    public class VacunaService
    {
         private readonly ControlVacunaContext _context;
        public VacunaService(ControlVacunaContext context)
        {
            _context = context;
        }
        public GuardarVacunaResponse GuardarVacunaResponse(Vacuna vacuna){
            try{
                var personaBuscada = BuscarPersona(vacuna);
                vacuna.CalcularEdadAplicacion(personaBuscada.FechaNacimiento);

                _context.Vacunas.Add(vacuna);
                _context.SaveChanges();
                return new GuardarVacunaResponse(vacuna);
            }catch(Exception e){
                return new GuardarVacunaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public Persona BuscarPersona(Vacuna vacuna){
            return _context.Personas.Find(vacuna.IdentificacionPersona);
        }
         public List<Vacuna> ConsultarTodos(){
            List<Vacuna> vacunas = _context.Vacunas.Include(p => p.Persona).ToList();
            return vacunas;
        }

        public Vacuna BuscarNombre(string Nombre){
            return _context.Vacunas.Find(Nombre);
        }
    }
    
    public class GuardarVacunaResponse 
    {
        public GuardarVacunaResponse(Vacuna vacuna)
        {
            Error = false;
            Vacuna = vacuna;
        }
        public GuardarVacunaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Vacuna Vacuna { get; set; }
    }
}