using Microsoft.EntityFrameworkCore.Migrations;

namespace bhBlogSite.Data.Migrations
{
    public partial class CommentBody : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Text",
                table: "Comments",
                newName: "CommentBody");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentBody",
                table: "Comments",
                newName: "Text");
        }
    }
}
