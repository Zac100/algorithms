const isSubsequence = require('./isSubsequence');

describe('#isSubsequence', () => {
  test('it should return true if str1 is in str2', () => {
    expect(isSubsequence('hello', 'hello world')).toEqual(true);
  });
  test('it should return true if str1 is in str2', () => {
    expect(isSubsequence('sing', 'sting')).toEqual(true);
  });
  test('it should return true if str1 is in str2', () => {
    expect(isSubsequence('abc', 'abracadabra')).toEqual(true);
  });
  test('it should return false if str1 is in str2 in wrong order', () => {
    expect(isSubsequence('abc', 'acb')).toEqual(false);
  });
});
