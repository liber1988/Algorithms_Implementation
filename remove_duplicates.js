var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
    if (i + 2 == nums.length && nums[i + 2] != nums[i]) {
      nums[k] = nums[i + 1];
    }
  }
  return k;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
