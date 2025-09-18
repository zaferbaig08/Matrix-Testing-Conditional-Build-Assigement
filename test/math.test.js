const { add, subtract, multiply } = require("../src/math");

test("adds numbers correctly", () => {
  expect(add(10, 5)).toBe(15);
});

test("subtracts numbers correctly", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("multiplies numbers correctly", () => {
  expect(multiply(4, 6)).toBe(24);
});