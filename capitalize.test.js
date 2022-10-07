const capitalize = require('./capitalize')
test('capitalize string correct', () => {
    expect(capitalize('apple')).toBe('Apple');
  });