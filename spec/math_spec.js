// tell the test where to find the code
var math = require('../math');

describe("A math program that does artimetic", function() {
  it("can adds two integers together", function() {
    expect(math.add(3, 5)).toBe(8);
  });
});
