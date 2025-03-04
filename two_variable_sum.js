let nums = [2, 2, 2, 7, 11, 15];
let target = 18;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashTable = {};
  nums.forEach((num, index) => {
    hashTable[num] = index; // Store index as value
  });
  console.log(hashTable);
  for (const value of nums) {
    if (hashTable[target - value]) {
      return [hashTable[target - value], hashTable[value]];
    }
  }
};
console.log(nums.length);
console.log(twoSum(nums, target));
