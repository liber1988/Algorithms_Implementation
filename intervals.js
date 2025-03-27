var summaryRanges = function (nums) {
  let array = [];
  let j = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i + 1]);
    if (nums[i] + 1 == nums[i + 1]) {
      if (j == 0) {
        start = i;
      }
      j += 1;
    } else {
      if (start == 0 && j == 0) {
        array.push("" + nums[i]);
      } else {
        array.push(nums[start] + "->" + nums[start + j]);

        start = 0;
        j = 0;
      }
    }
  }
  return array;
};
nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
