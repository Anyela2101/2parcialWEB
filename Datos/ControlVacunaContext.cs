using System;
using Microsoft.EntityFrameworkCore;
using Entity;

namespace Datos
{
    public class ControlVacunaContext:DbContext
    {
        public ControlVacunaContext(DbContextOptions options): base (options)
        {
            
        }
        public DbSet<Persona> Personas {get;set;}
        public DbSet<Vacuna> Vacunas {get;set;}
    }
}
