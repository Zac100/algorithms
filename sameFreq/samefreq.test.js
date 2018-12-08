const sameFrequency = require('./samefreq');

describe('#sameFrequency', () => {
  test('standard test', () => {
    expect(sameFrequency(182, 281)).toEqual(true);
  });
  test('standard test', () => {
    expect(sameFrequency(34, 14)).toEqual(false);
  });
  test('standard test', () => {
    expect(sameFrequency(22, 222)).toEqual(false);
  });
  test('standard test', () => {
    expect(sameFrequency(3589578, 5879385)).toEqual(true);
  });
});
