var canJump = function (nums) {
  let i = 0;
  let array = new Array();
  if (nums.length == 1 && nums[0] == 0) {
    return true;
  }
  while (i < nums.length) {
    array.push([nums[i], i]);

    if (array.at(-1)[0] === 0) {
      if (array.at(-1)[0] + array.at(-1)[1] >= nums.length - 1) {
        return true;
      } else if (array.length > 0) {
        while (array.at(-1)[0] === 0) {
          array.pop();
          if (array.length == 0) {
            console.log("i was here");
            return false;
          }

          console.log(array);
          array[array.length - 1][0] -= 1;
        }
      } else return false;
    }
    i = array.at(-1)[0] + array.at(-1)[1];
  }
  return true;
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
console.log(canJump(nums));
const arr1 = [[0, 0]];
