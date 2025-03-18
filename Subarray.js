/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Expand the window

    // Shrink the window from the left while sum is still valid
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left]; // Remove leftmost element
      left++; // Shrink the window
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

let target = 11;
nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
