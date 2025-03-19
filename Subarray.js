/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let j = 0;
  let minLength = Infinity;
  let sumtarget = 0;
  for (let i = 0; i < nums.length; i++) {
    sumtarget += nums[i];
    while (sumtarget >= target) {
      if (minLength > i - j + 1) minLength = i - j + 1;
      sumtarget -= nums[j];
      j++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

let target = 15;
nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
console.log(minSubArrayLen(target, nums));
