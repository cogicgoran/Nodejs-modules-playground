const FootballTeam = require("./entities/FootballTeam.entity");

function main() {
  const team = FootballTeam.createTeam("Goranovi puleni");
  team.randomGenerateMissingTeamPlayers();
  FootballTeam.displayPlayers(team);
}

main();
