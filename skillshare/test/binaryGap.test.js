const binaryGap = require('../binaryGap');

test('example test n=1041=10000010001', () => {
  expect(binaryGap(1041)).toBe(5);
});

test('example test n=15=1111', () => {
  expect(binaryGap(15)).toBe(0);
});

test('example test n=32=100000', () => {
  expect(binaryGap(32)).toBe(0);
});

test('n=1, n=5=101_2 and n=2147483647=2**31-1', () => {
  expect(binaryGap(1)).toBe(0);
  expect(binaryGap(5)).toBe(1);
  expect(binaryGap(2147483647)).toBe(0);
});

test('n=6=110_2 and n=328=101001000_2', () => {
  expect(binaryGap(6)).toBe(0);
  expect(binaryGap(328)).toBe(2);
});

test('n=5=101_2, n=16=2**4 and n=1024=2**10', () => {
  expect(binaryGap(5)).toBe(1);
  expect(binaryGap(16)).toBe(0);
  expect(binaryGap(1024)).toBe(0);
});

test('n=9=1001_2 and n=11=1011_2', () => {
  expect(binaryGap(9)).toBe(2);
  expect(binaryGap(11)).toBe(1);
});

test('n=19=10011 and n=42=101010_2', () => {
  expect(binaryGap(19)).toBe(2);
  expect(binaryGap(42)).toBe(1);
});

test('n=19=10011 and n=42=101010_2', () => {
  expect(binaryGap(1162)).toBe(3);
  expect(binaryGap(5)).toBe(1);
});

test('n=51712=110010100000000_2 and n=20=10100_2', () => {
  expect(binaryGap(51712)).toBe(2);
  expect(binaryGap(20)).toBe(1);
});

test('n=561892=10001001001011100100_2 and n=9=1001_2', () => {
  expect(binaryGap(561892)).toBe(3);
  expect(binaryGap(9)).toBe(2);
});

test('n=66561=10000010000000001_2', () => {
  expect(binaryGap(66561)).toBe(9);
});

test('n=6291457=11000000000000000000001_2', () => {
  expect(binaryGap(6291457)).toBe(20);
});

test('n=74901729=100011101101110100011100001', () => {
  expect(binaryGap(74901729)).toBe(4);
});

test('n=805306373=110000000000000000000000000101_2', () => {
  expect(binaryGap(805306373)).toBe(25);
});

test('n=1376796946=1010010000100000100000100010010', () => {
  expect(binaryGap(1376796946)).toBe(5);
});

test('n=1073741825=1000000000000000000000000000001_2', () => {
  expect(binaryGap(1073741825)).toBe(29);
});

test('n=1610612737=1100000000000000000000000000001_2', () => {
  expect(binaryGap(1610612737)).toBe(28);
});
