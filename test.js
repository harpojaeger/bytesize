const bytesize = require('./bytesize');


test('simple whole numbers', () => {
  expect(bytesize((2 ** 10), 1)).toBe('1KB');
  expect(bytesize(37*((2 ** 20)), 1)).toBe('37MB');
  expect(bytesize(7*(2**30), 1)).toBe('7GB');
  expect(bytesize(803*(2 ** 40), 1)).toBe('803TB');
  expect(bytesize(54*(2 ** 50), 1)).toBe('54PB');
  expect(bytesize(33*(2 ** 60), 1)).toBe('33EB');
  expect(bytesize(106*(2 ** 70), 1)).toBe('106ZB');
  expect(bytesize(965*(2 ** 80), 1)).toBe('965YB');
  expect(bytesize(2*(2 ** 90), 1)).toBe('2048YB');
});

test('boundary conditions', () => {
  expect(bytesize(0, 1)).toBe('0B');
  expect(bytesize(1023, 1)).toBe('1023B');
  expect(bytesize(1024 + 102, 0)).toBe('1KB');
  expect(bytesize((1024 ** 2) - 1, 1)).toBe('1MB');
  expect(bytesize((1024 ** 2) + 1, 1)).toBe('1MB');
  // Ensures that we don't try to reduce 1024YB to the next biggest prefix,
  // because there isn't one!
  expect(bytesize((2**90) -1, 1)).toBe('1024YB');
});

test('non-integer results', () => {
  expect(bytesize(5.5*(1024 ** 2), 1)).toBe('5.5MB');
  expect(bytesize(36523*(2 ** 20), 1)).toBe('35.7GB');
  expect(bytesize(36523*(2 ** 20), 2)).toBe('35.67GB');
  expect(bytesize(36523*(2 ** 20), 3)).toBe('35.667GB');
  expect(bytesize(36523*(2 ** 20), 4)).toBe('35.667GB');
  expect(bytesize(36523*(2 ** 20), 5)).toBe('35.66699GB');
  expect(bytesize(36523*(2 ** 20), 6)).toBe('35.666992GB');
});

test('negative sizes', () => {
  expect(bytesize(-35 * (2 ** 40), 1)).toBe('-35TB');
});

test('error conditions', () => {
  expect(() => {
    bytesize(1.5, 1);
  }).toThrow();

  expect(() => {
    bytesize(1, -1);
  }).toThrow();

  expect(() => {
    bytesize(1, 1.2);
  }).toThrow();
});
