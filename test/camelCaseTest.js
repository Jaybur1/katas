const assert = require("chai").assert;
const camelCase = require("../camelCase");

describe("#camelCase", () => {
  it("should return thisIsAString", () => {
    const data = "this is a string";

    assert.strictEqual(camelCase(data), "thisIsAString");
  });

  it("should return loopyLighthouse", () => {
    const data = "loopy lighthouse";

    assert.strictEqual(camelCase(data), "loopyLighthouse");
  });

  it("should return supercalifragalisticexpialidocious", () => {
    const data = "supercalifragalisticexpialidocious";
    
    assert.strictEqual(camelCase(data), "supercalifragalisticexpialidocious");
  });
});
