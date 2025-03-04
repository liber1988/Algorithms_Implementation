var pivotArray = function (nums, pivot) {
  var swap = function (arr, i, j) {
    let change = 0;
    change = arr[i];
    arr[i] = arr[j];
    arr[j] = change;
  };
  let long = nums.length - 1;
  let i = 0;
  let j = long;
  while (j >= i) {
    while (nums[i] < pivot && i <= long) {
      i++;
    }
    while (nums[j] > pivot && j >= 0) {
      j--;
    }
    if (nums[i] == pivot) {
      swap(nums, i, j);
      i++;
    } else if (nums[j] == pivot) {
      swap(nums, i, j);
      j--;
    } else {
      swap(nums, i, j);
      i++;
      j--;
    }
  }
};
let nums = [9, 12, 5, 10, 14, 3, 10, 13, 2, 78, 10];
let pivot = 10;
pivotArray(nums, pivot);
console.log(nums);
