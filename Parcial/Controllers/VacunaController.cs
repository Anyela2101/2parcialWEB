using System.Security.Permissions;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Parcial.Models;
using Datos;
using Logica;
using static Parcial.Models.VacunaModel;

namespace Parcial.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class VacunaController:ControllerBase
    {
        private readonly VacunaService _vacunaService;
        public VacunaController(ControlVacunaContext context)
        {
            _vacunaService = new VacunaService(context);
        }
        //GET: api/Vacuna
        [HttpGet]
        public IEnumerable<VacunaViewModel> Gets(){
            var vacunas = _vacunaService.ConsultarTodos().Select(p=>new VacunaViewModel(p));
            return vacunas;
        }

        //POST:api/Vacuna
        [HttpPost]
        public ActionResult<VacunaViewModel> post(VacunaInputModel vacunaInput){
            Vacuna vacuna = MapearVacuna(vacunaInput);
            var response =_vacunaService.GuardarVacunaResponse(vacuna);
            if(response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Vacuna);
        }

        private Vacuna MapearVacuna(VacunaInputModel vacunaInput){
            var vacuna = new Vacuna();
            vacuna.NombreVacuna = vacunaInput.nombreVacuna;
            vacuna.FechaVacuna = vacunaInput.fechaVacuna;
            vacuna.EdadAplicacion = vacunaInput.edadAplicacion;
            vacuna.IdentificacionPersona = vacunaInput.identificacionPersona;
            return vacuna;
        }
    }
}