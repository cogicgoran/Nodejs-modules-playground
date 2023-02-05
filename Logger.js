const { log } = require("console");

class Logger {
  // https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors
  // https://blog.logrocket.com/using-console-colors-node-js/
  static error(...content) {
    const templateStart = `\x1b[31m`;
    const templateEnd = `\x1b[0m`;
    log(`${templateStart}${content.join(' ')}${templateEnd}`);
  }

  static warn(...content) {
    const templateStart = `\x1b[33m`;
    const templateEnd = `\x1b[0m`;
    log(`${templateStart}${content.join(' ')}${templateEnd}`);
  }

  static success(...content) {
    const templateStart = `\x1b[32m`;
    const templateEnd = `\x1b[0m`;
    log(`${templateStart}${content.join(' ')}${templateEnd}`);
  }

  static info(...content) {
    const templateStart = `\x1b[36m`;
    const templateEnd = `\x1b[0m`;
    log(`${templateStart}${content.join(' ')}${templateEnd}`);
  }
}

module.exports = Logger;
