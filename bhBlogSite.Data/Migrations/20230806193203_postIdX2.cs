using Microsoft.EntityFrameworkCore.Migrations;

namespace bhBlogSite.Data.Migrations
{
    public partial class postIdX2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "Comments",
                newName: "PostId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PostId",
                table: "Comments",
                newName: "PersonId");
        }
    }
}
