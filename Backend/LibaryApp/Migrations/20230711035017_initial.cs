using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibaryApp.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    bio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    nrOfBooks = table.Column<int>(type: "int", nullable: false),
                    createdBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                 constraints: table =>
                 {
                     table.PrimaryKey("PK_Authors", x => x.Id);
                     table.ForeignKey(
                         name: "FK_Authors_admin_createdBy",
                         column: x => x.createdBy,
                         principalTable: "Admins",
                         principalColumn: "username",
                         onDelete: ReferentialAction.Restrict);
                 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Authors");
        }
    }
}
