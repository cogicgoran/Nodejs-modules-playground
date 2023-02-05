const Utils = require("../utils/Utils");
const Logger = require("../Logger");

class Footballer {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  set setPosition(position) {
    this.position = position;
  }

  set setAge(age) {
    this.age = age;
  }

  set setName(name) {
    this.name = name;
  }

  static generateRandomPlayer() {
    return new Footballer(
      Utils.getRandomName(),
      Utils.getRandomAge(),
      Utils.getRandomPosition()
    );
  }

  static displayPlayerInfo(player) {
    Logger.info(`Name: ${player.name}`);
  }
}

module.exports = Footballer;
