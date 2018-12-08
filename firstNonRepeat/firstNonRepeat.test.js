const firstNonRepeat = require('./firstNonRepeat');

describe('#firstNonRepeat', () => {
  test('it works with different strings', () => {
    expect(firstNonRepeat('aabbc')).toEqual('c');
    expect(firstNonRepeat('zac')).toEqual('z');
    expect(firstNonRepeat('yyhhggvcc')).toEqual('v');
  });
  test('it works with empty input', () => {
    expect(firstNonRepeat('')).toEqual(undefined);
  });
});
