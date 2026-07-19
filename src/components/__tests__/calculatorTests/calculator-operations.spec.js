import { describe, expect, it } from "vitest"
import {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} from "../../calculator/calculator-operations.js"

describe("calculator operations", () => {
  it("adds two numbers", () => {
    expect(add(4, 3)).toBe(7)
  });

  it("subtracts two numbers", () => {
    expect(subtract(4, 3)).toBe(1)
  });

  it("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12)
  });

  it("divides two numbers", () => {
    expect(divide(12, 3)).toBe(4);
  })

  it("rejects division by zero", () => {
    expect(() => divide(12, 0)).toThrow("Cannot divide by zero");
  })

})
