const assert = require("chai").assert;
const conditionalSum = require("../conditionalSum");

describe("#conditionalSum", () => {
  it("should return 6 when the input is [1, 2 3, 4, 5], 'even'", () => {
    const arr = [1, 2, 3, 4, 5];

    assert.strictEqual(conditionalSum(arr,'even'), 6);
  });

  it("should return 9 when the input is [1, 2, 3, 4, 5], 'odd'", () => {
    const arr = [1, 2, 3, 4, 5];

    assert.strictEqual(conditionalSum(arr,'odd'), 9);
  });

  it("should return 144 when the input is [13, 88, 12, 44, 99], 'even'", () => {
    const arr = [13, 88, 12, 44, 99];

    assert.strictEqual(conditionalSum(arr,'even'), 144);
  });

  it("should return 0 when the input is [], 'odd'", () => {
    const arr = [];

    assert.strictEqual(conditionalSum(arr,'odd'), 0);
  });
});
