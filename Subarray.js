/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let j = 0;
  let subarray = [];
  let small = Infinity;
  let i = 0;
  while (j < nums.length) {
    if (sum < target && i < nums.length) sum += nums[i];

    if (sum > target) {
      sum -= nums[j];
      j++;
    }
    if (sum >= target && i - j < small) {
      small = i - j;
      subarray = [];

      for (let x = j; x < i + 1; x++) {
        subarray.push(nums[x]);
      }
      sum -= nums[j];
      j++;
      console.log(subarray);
    }
    if (i < nums.length) {
      i++;
    } else {
      j++;
    }
  }
  if (subarray.length == 0) {
    return 0;
  }
  return subarray.length;
};
let target = 11;
nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
