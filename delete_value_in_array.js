var removeElement = function (nums, val) {
  let k = 0; // Pointer for placing non-val elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move valid elements forward
      k++;
    }
  }

  return k; // Return the count of elements that are not val
};
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const nums1 = removeElement(nums, val);
console.log(nums);
console.log(nums1);
