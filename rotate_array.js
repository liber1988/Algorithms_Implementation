var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n; // Ensure k is within bounds

  // Helper function to reverse part of the array
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1); // Step 1: Reverse the whole array
  reverse(0, k - 1); // Step 2: Reverse first k elements
  reverse(k, n - 1); // Step 3: Reverse the rest
};

console.log(rotate(nums, k));
