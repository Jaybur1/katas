const assert = require("chai").assert;
const urlEncode = require("../urlEncode");

describe("#urlEncode", () => {
  it("should return Lighthouse%20Labs", () => {
    const data = 'Lighthouse Labs';

    assert.deepEqual(urlEncode(data),'Lighthouse%20Labs');
  });

  it("should return Lighthouse%20Labs", () => {
    const data = 'Lighthouse Labs'

    assert.deepEqual(urlEncode(data),'Lighthouse%20Labs');
  });

  it("should return blue%20is%20greener%20than%20purple%20for%20sure", () => {
    const data = 'blue is greener than purple for sure';

    assert.deepEqual(urlEncode(data),'blue%20is%20greener%20than%20purple%20for%20sure');
  });
});
