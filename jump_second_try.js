var canJump = function (nums) {
  let farthest = 0;
  let j = 0;
  maxfarthest = -1;
  if (nums.length == 1) {
    return j;
  }
  if (nums[0] >= nums.length) {
    return j + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (farthest < i + nums[i]) {
      farthest = i + nums[i];
      if (
        farthest >= nums.length - 1 ||
        maxfarthest < nums[farthest] + farthest
      ) {
        j++;
        if (farthest > nums.length - 1) return j;
        maxfarthest = nums[farthest] + farthest;
        if (maxfarthest >= nums.length - 1) return j + 1;
      }
    }
  }
};
const nums = [2, 0, 8, 0, 3, 4, 7, 5, 6, 1, 0, 0, 5, 9, 7, 5, 3, 6];
console.log(canJump(nums));
