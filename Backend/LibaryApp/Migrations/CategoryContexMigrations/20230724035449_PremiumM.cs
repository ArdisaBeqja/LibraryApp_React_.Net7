using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibaryApp.Migrations.CategoryContexMigrations
{
    /// <inheritdoc />
    public partial class PremiumM : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "premium",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "premium",
                table: "Categories");
        }
    }
}
