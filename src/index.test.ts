import { add } from "./index";

describe("index.ts", () => {
  it("add: sums two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
