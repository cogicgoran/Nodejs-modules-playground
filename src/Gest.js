const Logger = require("./Logger");

// Gest, fake Jest
class Gest {
  /**
   *
   * @param {string} testName
   * @param {function} callback
   */
  static it(testName, callback) {
    try {
      Logger.info("Running test:", testName);
      callback();
      Logger.success("Test passed:", testName);
    } catch (error) {
      Logger.error(error);
    }
  }
}

module.exports = Gest;
