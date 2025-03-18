var twoSum = function (numbers, target) {
  let r = numbers.length - 1;
  let l = 0;
  for (i = 0; i < numbers.length - 1; i++) {
    if (numbers[l] + numbers[r] == target) {
      return [l + 1, r + 1];
    }
    if (numbers[l] + numbers[r] > target) {
      r--;
    }
    if (numbers[l] + numbers[r] < target) {
      l++;
    }
  }
  return false;
};
numbers = [-10, -8, -2, 1, 2, 5, 6];
console.log(twoSum(numbers, 0));
