var removeDuplicates = function (nums) {
  let k = 0; // Position to insert the allowed element
  for (let num of nums) {
    // Allow the number if it's the first two occurrences or if it's different from the number two positions back
    if (k < 2 || nums[k - 2] !== num) {
      nums[k] = num;
      k++;
    }
  }
  return k;
};
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);
