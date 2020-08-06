using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Soccer_Matches.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SoccerData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    League = table.Column<string>(nullable: true),
                    NumberTeamsLeague = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    HomeTeam = table.Column<string>(nullable: true),
                    AwayTeam = table.Column<string>(nullable: true),
                    Result = table.Column<string>(nullable: true),
                    HomeFinalGoals = table.Column<string>(nullable: true),
                    AwayFinalGoals = table.Column<string>(nullable: true),
                    HomeExtraGoals = table.Column<string>(nullable: true),
                    AwayExtraGoals = table.Column<string>(nullable: true),
                    HomeFirstHalfGoals = table.Column<string>(nullable: true),
                    AwayFirstHalfGoals = table.Column<string>(nullable: true),
                    HomeSecondHalfGoals = table.Column<string>(nullable: true),
                    AwaySecondHalfGoals = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoccerData", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SoccerData");
        }
    }
}
