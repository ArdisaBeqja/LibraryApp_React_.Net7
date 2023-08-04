using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibaryApp.Migrations.NotesContexMigrations
{
    /// <inheritdoc />
    public partial class Notes2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "admin",
                table: "Notess",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "admin",
                table: "Notess");
        }
    }
}
