const assert = require("chai").assert;
const instructorWithLongestName = require("../instructorWithLongestName");

describe("#instructorWithLongestName", () => {
  it("should return Jeremiah", () => {
    const data = [
      { name: "Samuel", course: "iOS" },
      { name: "Jeremiah", course: "Web" },
      { name: "Ophilia", course: "Web" },
      { name: "Donald", course: "Web" }
    ];

    assert.deepEqual(instructorWithLongestName(data), {
      name: "Jeremiah",
      course: "Web"
    });
  });

  it("should return Domascus", () => {
    const data = [
      { name: "Matthew", course: "Web" },
      { name: "David", course: "iOS" },
      { name: "Domascus", course: "Web" }
    ];

    assert.deepEqual(instructorWithLongestName(data), {
      name: "Domascus",
      course: "Web"
    });
  });
});
