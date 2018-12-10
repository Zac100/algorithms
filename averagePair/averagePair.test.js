const averagePair = require('./averagePair');

describe('#averagePair', () => {
  test('it should return true', () => {
    expect(averagePair([1, 2, 3], 2.5)).toEqual(true);
  });
  test('it should return true with longer arrays', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true);
  });
  test('it should return false with no valid averages', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false);
  });
  test('it should return false with blank arrays', () => {
    expect(averagePair([], 4)).toEqual(false);
  });
});
