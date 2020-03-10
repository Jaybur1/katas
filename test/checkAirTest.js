const assert = require("chai").assert;
const checkAir = require("../checkAir");

describe("#checkAir", () => {
  it("should return Polluted", () => {
    const data = [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty"
    ];
    const threshold = 0.3;
    assert.deepEqual(checkAir(data, threshold), 'Polluted');
  });

  it("should return Polluted", () => {
    const data = ["dirty", "dirty", "dirty", "dirty", "clean"];
    const threshold = 0.25;
    assert.deepEqual(checkAir(data, threshold), "Polluted");
  });

  it("should return Clean", () => {
    const data = [
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean"
    ];
    const threshold = 0.9;
    assert.deepEqual(checkAir(data, threshold), 'Clean');
  });
});
