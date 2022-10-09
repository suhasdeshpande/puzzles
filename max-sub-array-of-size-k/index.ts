/*
  Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
  Sliding Window Pattern, calculate the sum of the first k elements, then slide the window by adding the next element and subtracting the first element of the previous window.
  Time Complexity: O(n)
 */

export function maxSubArrayOfSizeK(k: number, arr: Array<number>): number {
  let max = -Infinity;
  let sum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }
  return max;
}
