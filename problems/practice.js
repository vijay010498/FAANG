// pair sum array

// brute force solution  - Two pointer solution
// Time complexity = O(n^2)
// Space Complexity  = O(1)
const findTwoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === numberToFind) return { i, j };
    }
  }
  return null;
};

// Okay - optimized solution
// Time complexity  = O(n log n)
// Space complexity = O(1)

const findTwoSumOkayOpti = function (nums, target) {
  // always array sorted in ascending order
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return { i: nums[left], j: nums[right] };
    else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
  return null;
};

// well - optimized solution
// Time complexity  = O(n);
// Space complexity  = O(n);
const findTwoSumOpti = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let currentValMap = map[nums[i]];
    if (currentValMap >= 0) {
      return [currentValMap, i];
    }
    let numberToFind = target - nums[i];
    map[numberToFind] = i;
  }
  return null;
};
console.log(findTwoSumOkayOpti([1, 2, 3, 4, 5, 6], 9));

// container with most water  - return the area
