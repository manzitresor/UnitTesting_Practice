const capitalizeString = require('./capitirizeString')

test('Capitalize string', () => {
    expect(capitalizeString('word')).toBe('Word');
  });