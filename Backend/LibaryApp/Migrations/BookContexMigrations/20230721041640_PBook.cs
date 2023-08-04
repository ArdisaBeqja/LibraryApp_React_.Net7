using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibaryApp.Migrations.BookContexMigrations
{
    /// <inheritdoc />
    public partial class PBook : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "premium",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "premium",
                table: "Books");
        }
    }
}
