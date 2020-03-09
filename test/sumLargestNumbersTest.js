const assert = require("chai").assert;
const sumLargestNumbers = require("../sumLargestNumbers");

describe("#sumLargestNumbers", () => {
  it("should return 11 when the input is [1,10]", () => {
    const arr = [1, 10];

    assert.strictEqual(sumLargestNumbers(arr), 11);
  });

  it("should return 5 when the input is [1, 2, 3]", () => {
    const arr = [1, 2, 3];

    assert.strictEqual(sumLargestNumbers(arr), 5);
  });

  it("should return 126 when the input is [10, 4, 34, 6, 92, 2]", () => {
    const arr = [10, 4, 34, 6, 92, 2];

    assert.strictEqual(sumLargestNumbers(arr), 126);
  });
});
