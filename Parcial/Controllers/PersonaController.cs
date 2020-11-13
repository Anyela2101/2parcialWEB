using System.Security.Permissions;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Parcial.Models;
using Datos;
using static Parcial.Models.PersonaModel;

namespace Parcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController:ControllerBase
    {
        private readonly PersonaService _personaService;
        public PersonaController(ControlVacunaContext context)
        {
            _personaService = new PersonaService(context);
        }
        //GET: api/Persona
        [HttpGet]
        public IEnumerable<PersonaViewModel> Gets(){
            var personas = _personaService.ConsultarTodos().Select(p=>new PersonaViewModel(p));
            return personas;
        }

        //POST:api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> post(PersonaInputModel personaInput){
            Persona persona = MapearPersona(personaInput);
            var response =_personaService.Guardar(persona);
            if(response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }

        //GET: api/Persona/5
        [HttpGet("{identificacion}")]
        public ActionResult<PersonaViewModel> Get(string identificacion){
            var persona = _personaService.BuscarIdentificacion(identificacion);
            if(persona== null) return NotFound();
            var personaViewModel = new PersonaViewModel(persona);
            return personaViewModel;

        }

        
        private Persona MapearPersona(PersonaInputModel personaInput){
            var persona = new Persona();
            persona.TipoDocumento = personaInput.tipoDocumento;
            persona.Identificacion = personaInput.identificacion;
            persona.NombreEstudiante = personaInput.nombreEstudiante;
            persona.FechaNacimiento = personaInput.fechaNacimiento;
            persona.InstitucionEducativa = personaInput.institucionEducativa;
            persona.NombreAcudiente = personaInput.nombreAcudiente;
            return persona;

        }
    }
}