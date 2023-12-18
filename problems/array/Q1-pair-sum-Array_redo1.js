// Easy question
// Given an array of integers, return the indices of 2 numbers that add up to a given target


// brute force solution
// O(n^2)
// O(1)

const findTwoSum = (nums = [], target) => {
  for (let p1 = 0 ; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
}


// Okay - optimized solution
// Time complexity - O(n log n)
// space complexity = O(1)

const findTwoSumOkayOpti = function (nums = [], target) {
  let left = 0 ;
  let right = nums.length = 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return  null;

}

// well - optimized solution
// Time complexity = O(n);
// space complexity = O(n);
const findTwoSumOptimized = function (nums = [], target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])]
    }
    const ntf = target - nums[i];

    map.set(ntf, i);
  }

  return null;
}