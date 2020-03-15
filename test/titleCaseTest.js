const assert = require("chai").assert;
const titleCase = require("../titleCase");

describe("#titleCase", () => {
  it("should return This Is An Example", () => {
    const input = "this is an Example";
    assert.strictEqual(titleCase(input), "This Is An Example");
  });

  it("should return Test", () => {
    const input = "test";
    assert.strictEqual(titleCase(input), "Test");
  });

  it("should return I R Cool", () => {
    const input = "i r Cool";
    assert.strictEqual(titleCase(input), "I R Cool");
  });

  it("should return What Happens Here", () => {
    const input = "WHAT HAPPENS HERE";
    assert.strictEqual(titleCase(input), "What Happens Here");
  });

  it('should return ""', () => {
    const input = "";
    assert.strictEqual(titleCase(input), "");
  });

  it("should return A", () => {
    const input = "A";
    assert.strictEqual(titleCase(input), "A");
  });
});
