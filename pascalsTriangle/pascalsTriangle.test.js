const pascalsTriangle = require('./pascalsTriangle');

describe('#pascalsTriangle', function() {
  it('correctly calculated pascals triangle', function() {
    expect(pascalsTriangle(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
    expect(pascalsTriangle(1)).toEqual([[1]]);
  });
});
