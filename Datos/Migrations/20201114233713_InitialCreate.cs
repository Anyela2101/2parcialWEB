﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personas",
                columns: table => new
                {
                    Identificacion = table.Column<string>(type: "varchar(10)", nullable: false),
                    TipoDocumento = table.Column<string>(type: "varchar(11)", nullable: true),
                    NombreEstudiante = table.Column<string>(type: "varchar(20)", nullable: true),
                    FechaNacimiento = table.Column<DateTime>(type: "Date", nullable: false),
                    InstitucionEducativa = table.Column<string>(type: "varchar(30)", nullable: true),
                    NombreAcudiente = table.Column<string>(type: "varchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personas", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Vacunas",
                columns: table => new
                {
                    VacunaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdentificacionPersona = table.Column<string>(type: "varchar(10)", nullable: true),
                    NombreVacuna = table.Column<string>(type: "varchar(20)", nullable: true),
                    FechaVacuna = table.Column<DateTime>(type: "Date", nullable: false),
                    EdadAplicacion = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacunas", x => x.VacunaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Personas");

            migrationBuilder.DropTable(
                name: "Vacunas");
        }
    }
}
