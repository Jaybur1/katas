const assert = require("chai").assert;
const numberOfVowels = require("../numberOfVowels");

describe("#numberOfVowels", () => {
  it("should return 3 when the input is orange", () => {
    const data = 'orange';

    assert.strictEqual(numberOfVowels(data), 3);
  });

  it("should return 5 when the input is lighthouse labs", () => {
    const data = 'lighthouse labs';

    assert.strictEqual(numberOfVowels(data), 5);
  });

  it("should return 5 when the input is aeiou", () => {
    const data = 'aeiou';

    assert.strictEqual(numberOfVowels(data), 5);
  });
});
