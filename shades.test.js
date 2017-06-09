const makeGrayscale = require('./shades')['makeGrayscale'];
const extractColors = require('./shades')['extractColors'];
const averageGrey = require('./shades')['averageGrey'];

test("extracts colors from rgb when 0", () => {
  const input = "rgb(0, 0, 0)";
  const expected = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  expect(extractColors(input)).toEqual(expected);
});

test("extracts colors from rgb when not 0", () => {
  const input = "rgb(1, 2, 3)";
  const expected = {
    red: 1,
    green: 2,
    blue: 3,
    alpha: 0
  };
  expect(extractColors(input)).toEqual(expected);
});

test("extracts colors from rgba when 0", () => {
  const input = "rgba(0, 0, 0, 0)";
  const expected = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  expect(extractColors(input)).toEqual(expected);
});

test("extracts colors from rgba when not 0", () => {
  const input = "rgba(1, 2, 3, 4)";
  const expected = {
    red: 1,
    green: 2,
    blue: 3,
    alpha: 4
  };
  expect(extractColors(input)).toEqual(expected);
});

test("averages rgb(0, 0, 0) to 0", () => {
  const input = {
    red: 0,
    green: 0,
    blue: 0
  };
  const expected = 0;
  expect(averageGrey(input)).toBe(expected);
});

test("averages rgb(1, 2, 3) to 2", () => {
  const input = {
    red: 1,
    green: 2,
    blue: 3
  };
  const expected = 2;
  expect(averageGrey(input)).toBe(expected);
});

test("averages rgb(5, 7, 22) to 11", () => {
  const input = {
    red: 5,
    green: 7,
    blue: 22
  };
  const expected = 11;
  expect(averageGrey(input)).toBe(expected);
});

test("returns rgba when 0", () => {
  const input = "rgb(0, 0, 0)";
  const expected = "rgba(0, 0, 0, 0)";
  expect(makeGrayscale(input)).toBe(expected);
});

test("returns rgba when not 0", () => {
  const input = "rgb(1, 2, 3)";
  const expected = "rgba(2, 2, 2, 0)";
  expect(makeGrayscale(input)).toBe(expected);
});

test("returns rgba with alpha intact", () => {
  const input = "rgba(2, 4, 6, 1)";
  const expected = "rgba(4, 4, 4, 1)";
  expect(makeGrayscale(input)).toBe(expected);
});