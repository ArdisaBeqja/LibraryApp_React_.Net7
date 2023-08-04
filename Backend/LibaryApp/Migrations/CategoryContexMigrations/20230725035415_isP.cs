using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibaryApp.Migrations.CategoryContexMigrations
{
    /// <inheritdoc />
    public partial class isP : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ispremium",
                table: "Categories",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ispremium",
                table: "Categories");
        }
    }
}
