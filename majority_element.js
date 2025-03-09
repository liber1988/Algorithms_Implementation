var majorityElement = function (nums) {
  let n = nums.length;
  let count = 1;
  let element = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] != null) {
      for (let j = i + 1; j < n; j++) {
        if (nums[i] == nums[j]) {
          count++;
          nums[j] = null;
        }
      }
      if (count > n / 2) {
        console.log(count);
        element = nums[i];
      }
    }
    count = 1;
  }
  return element;
};

const nums = [2, 2, 1, 1, 1, 1, 1, 1];
console.log(majorityElement(nums));
