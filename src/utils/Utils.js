class Utils {
  static getRandomNumberBetween(lowLimit, highLimit) {
    return Math.ceil(Math.random() * (highLimit - lowLimit) + lowLimit);
  }

  static getRandomName() {
    const names = [
      "Goran",
      "Bane",
      "Petar",
      "Kosta",
      "Marko",
      "Darko",
      "Zarko",
    ];
    return names[Utils.getRandomNumberBetween(0, names.length - 1)];
  }

  static getRandomAge() {
    return Utils.getRandomNumberBetween(17, 40);
  }

  static getRandomPosition() {
    const positions = [
      "GK",
      "LB",
      "CB",
      "RB",
      "LM",
      "CM",
      "RM",
      "LW",
      "CF",
      "ST",
      "RW",
    ];
    return positions[Utils.getRandomNumberBetween(0, positions.length - 1)];
  }
}

module.exports = Utils;
