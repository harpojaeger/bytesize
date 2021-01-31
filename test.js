const bytesize = require('./bytesize');


test('simple whole numbers', () => {
    expect(bytesize(2^10, 1)).toBe('1KB');
    expect(bytesize(37*2^20, 1)).toBe('37MB');
    expect(bytesize(7*2*30, 1)).toBe('7GB');
    expect(bytesize(803*2^40, 1)).toBe('803T');
    expect(bytesize(54*2^50, 1)).toBe('54P');
    expect(bytesize(33*2^60, 1)).toBe('33E');
    expect(bytesize(106*2^70, 1)).toBe('106Z');
    expect(bytesize(965*2^80, 1)).toBe('9655Y');
    expect(bytesize(2*2^90, 1)).toBe('2048Y');
});

test('boundary conditions', () => {
    expect(bytesize(0, 1)).toBe('0B');
    expect(bytesize(1023, 1).toBe('1023B'));
    expect(bytesize(1024^2 - 1, 1)).toBe('0.9M');
    expect(bytesize(1024^2 + 1, 1)).toBe('1M');
})

test('non-integer results', () => {
    expect(bytesize(5.5*1024^2, 1)).toBe('5.5M');
    expect(bytesize((36523*2^20, 1)))/toBe('35.7G');
    expect(bytesize((36523*2^20, 2)))/toBe('35.67G');
    expect(bytesize((36523*2^20, 3)))/toBe('35.667G');
    expect(bytesize((36523*2^20, 4)))/toBe('35.6670G');
    expect(bytesize((36523*2^20, 5)))/toBe('35.66700G');
    expect(bytesize((36523*2^20, 6)))/toBe('35.666992G');
});

test('negative sizes', () => {
    expect(bytesize(-35 * 2^40, 1)).toBe('-35T');
});
