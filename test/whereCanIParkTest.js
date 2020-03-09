const assert = require("chai").assert;
const whereCanIPark = require("../whereCanIPark");

describe("#whereCanIPark", () => {
  it("should return [4,0]", () => {
    const data =   [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ];
    const type = 'regular';

    assert.deepEqual(whereCanIPark(data,type),[4,0]);
  });

  it("should return false", () => {
    const data =  [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ];
    const type = 'small';
    assert.isFalse(whereCanIPark(data,type));
  });

  it("should return [3,5]", () => {
    const data =   [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ];
    const type = 'motorcycle';

    assert.deepEqual(whereCanIPark(data, type),[3,1]);
  });
});
