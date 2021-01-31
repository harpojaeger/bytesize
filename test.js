const bytesize = require('./bytesize');


test('1K', () => {
  expect(bytesize(1024, 1)).toBe('1K');
});

test('2M', () => {
    expect(bytesize(1024^2, 1)).toBe('1M');
});

test('5.5M', () => {
    expect(bytesize(5.5*1024^2, 1)).toBe('5.5M');
});
