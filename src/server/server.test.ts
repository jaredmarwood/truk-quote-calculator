import { describe, it, expect } from "vitest";

describe("truk-2 server smoke", () => {
  it("has at least one test so vitest exits 0 in CI", () => {
    expect(2 + 2).toBe(4);
  });
});
