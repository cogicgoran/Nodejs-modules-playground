const assert = require("assert");
const Logger = require("./Logger");
const Gest = require("./Gest");

Gest.it("This is my test", () => {
  const entries = getEntries({ a: 1, b: 2 });
  assert(entries, [
    ["a", 1],
    ["b", 3],
  ]);
});

function getEntries(object) {
  return Object.entries(object);
}
