const assert = require("assert");
const { it } = require("../src/Gest");
const FootballTeam = require("../src/entities/FootballTeam.entity");
const Logger = require("../src/Logger");
const Footballer = require("../src/entities/Footballer.entity");

function runTests() {
  it("should create a team with the given name", () => {
    const teamName = "Test team name";
    const createdTeam = FootballTeam.createTeam(teamName);
    assert.deepEqual(createdTeam, {
      name: teamName,
      players: [],
    });
  });

  it("should populate team to minimum amount of players", () => {
    const createdTeam = FootballTeam.createTeam("Test team");
    assert.strictEqual(createdTeam.players.length, 0);
    createdTeam.randomGenerateMissingTeamPlayers();
    assert.strictEqual(createdTeam.players.length, FootballTeam.MIN_PLAYERS);
  });

  it("should update player's name", () => {
    const footballer = new Footballer("noName");
    assert.strictEqual(footballer.name, "noName");
    footballer.setName("newName");
    assert.strictEqual(footballer.name, "newName");
  });

  it("should update player's age", () => {
    const footballer = new Footballer("name", 20);
    assert.strictEqual(footballer.age, 20);
    footballer.setAge(21);
    assert.strictEqual(footballer.age, 21);
  });
}

function main() {
  Logger.info("Initiating test...");
  runTests();
  Logger.info("Ending tests...");
}

main();
