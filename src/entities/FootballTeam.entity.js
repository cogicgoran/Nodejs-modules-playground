const Logger = require("../Logger");
const Footballer = require("./Footballer.entity");

class FootballTeam {
  static MIN_PLAYERS = 11;

  constructor(teamName) {
    this.name = teamName;
    this.players = [];
  }

  addPlayer(footballer) {
    this.players.push(footballer);
  }

  get getPlayers() {
    return this.players;
  }

  randomGenerateMissingTeamPlayers() {
    let currentAmountOfTeamMembers = this.players.length;
    while (currentAmountOfTeamMembers < FootballTeam.MIN_PLAYERS) {
      const generatedPlayer = Footballer.generateRandomPlayer();
      this.addPlayer(generatedPlayer);
      currentAmountOfTeamMembers++;
    }
  }

  static createTeam(teamName) {
    return new FootballTeam(teamName);
  }

  static displayPlayers(team) {
    Logger.warn("---");
    team.players.forEach((player) => {
      Footballer.displayPlayerInfo(player);
      Logger.warn("---");
    });
  }
}

module.exports = FootballTeam;
