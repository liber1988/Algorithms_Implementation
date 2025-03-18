var canJump = function (nums) {
  let farthest = 0;
  let j = 0;

  function fillPreviousUndefined(arr, index, value) {
    // Ensure the array is large enough
    if (index >= arr.length) {
      arr.length = index + 1;
    }

    // Fill all undefined spots before the current index
    for (let i = 0; i <= index; i++) {
      if (arr[i] === undefined) {
        arr[i] = value;
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }

    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
const nums = [3, 2, 1, 2, 5, 13, 8, 85, 4];
console.log(canJump(nums));
