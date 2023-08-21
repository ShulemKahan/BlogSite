using Microsoft.EntityFrameworkCore.Migrations;

namespace bhBlogSite.Data.Migrations
{
    public partial class CommentedOn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Comments",
                newName: "CommentedOn");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentedOn",
                table: "Comments",
                newName: "Date");
        }
    }
}
