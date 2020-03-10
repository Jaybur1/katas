const assert = require("chai").assert;
const repeatNumbers = require("../repeatNumbers");

describe("#repeatNumbers", () => {
  it("should return 1111111111", () => {
    const data = [[1,10]]; 

    assert.strictEqual(repeatNumbers(data), "1111111111");
  });

  it("should return 11, 222", () => {
    const data = [[1, 2], [2, 3]];

    assert.strictEqual(repeatNumbers(data), "11, 222");
  });

  it("should return 10101010, 343434343434, 9292", () => {
    const data = [[10, 4], [34, 6], [92, 2]];
    
    assert.strictEqual(repeatNumbers(data), "10101010, 343434343434, 9292");
  });
});
