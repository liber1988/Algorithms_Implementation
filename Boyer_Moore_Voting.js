var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  // Boyer-Moore Voting Algorithm
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// Example test cases
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
