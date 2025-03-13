var canJump = function (nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // If we can't reach this index, return false
    farthest = Math.max(farthest, i + nums[i]); // Update the farthest reachable index
    if (farthest >= nums.length - 1) return true; // If we can reach the last index, return true
  }

  return false;
};

const nums1 = [3, 2, 1, 0, 4];
const nums2 = [2, 3, 1, 1, 4];
const nums3 = [2, 5, 0, 0];
const nums = [
  2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6, 5,
  3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5, 8, 0,
  7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7, 7, 1, 9,
  1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5, 1, 7, 9, 6,
];
const nums4 = [2, 3, 1, 1, 4];
const nums5 = [2, 5, 0, 0];
console.log(canJump(nums));
const arr1 = [[0, 0]];
