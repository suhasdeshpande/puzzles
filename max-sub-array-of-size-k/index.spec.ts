import { describe, expect } from "@jest/globals";

import { maxSubArrayOfSizeK } from "./index";

describe("maxSubArrayOfSizeK", () => {
  it("should return the max sum of a subarray of size k", () => {
    expect(maxSubArrayOfSizeK(3, [2, 1, 5, 1, 3, 2])).toBe(9);
    expect(maxSubArrayOfSizeK(2, [2, 3, 4, 1, 5])).toBe(7);
  });
});
