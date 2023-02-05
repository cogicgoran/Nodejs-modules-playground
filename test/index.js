const assert = require("assert");
const Gest = require("../Gest");
const FootballTeam = require("../src/entities/FootballTeam.entity");
const Logger = require("../Logger");

function runTests() {
  Gest.it("should create a team with the given name", () => {
    const teamName = "Test team name";
    const createdTeam = FootballTeam.createTeam(teamName);
    assert.deepEqual(createdTeam, {
      name: teamName,
      players: [],
    });
  });

  Gest.it("should populate team to minimum amount of players", () => {
    const createdTeam = FootballTeam.createTeam("Test team");
    assert.strictEqual(createdTeam.players.length, 0);
    createdTeam.randomGenerateMissingTeamPlayers();
    assert.strictEqual(createdTeam.players.length, FootballTeam.MIN_PLAYERS);
  });
}

function main() {
  Logger.info("Initiating test...");
  runTests();
  Logger.info("Ending tests...");
}

main();
