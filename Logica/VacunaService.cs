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
        public GuardarVacunaResponse GuardarVacunaResponse(Vacuna vacuna, Persona persona){
            try{
                var vacunaBuscada =_context.Personas.Find(persona.Identificacion);
                if(vacunaBuscada!=null){
                    return new GuardarVacunaResponse("Error al estudiante ya se le aplico la vacuna");
                }
                vacuna.CalcularEdadAplicacion(persona.FechaNacimiento);
                _context.Vacunas.Add(vacuna);
                _context.SaveChanges();
                return new GuardarVacunaResponse(vacuna, persona);
            }catch(Exception e){
                return new GuardarVacunaResponse($"Error de la Aplicacion: {e.Message}");
            }
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
        public GuardarVacunaResponse(Vacuna vacuna, Persona persona)
        {
            Error = false;
            Persona = persona;
            Vacuna = vacuna;
        }
        public GuardarVacunaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Persona Persona { get; set; }
        public Vacuna Vacuna { get; set; }
    }
}