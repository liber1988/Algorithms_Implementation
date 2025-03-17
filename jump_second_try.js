var canJump = function (nums) {
  let farthest = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }

    farthest = Math.max(farthest, i + nums[i]);
    j++;
    console.log(j);
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
const nums = [3, 2, 1, 2, 5, 13, 8, 85, 4];
console.log(canJump(nums));
