// Survey sparrow question - sum of paris equal to the target number from an array

// step - 1 :  verify the constraints
// step - 2 : Write some test cases
// step - 3 : solution without the code
// step - 5 : Double check for errors

// Brute force solution - Two pointer solution
// Time complexity = O(n^2);
// Space complexity = O(1)
const findTwoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) { // O(N)
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) { // O(N)
      if (numberToFind === nums[p2]) return [p1, p2];
    }
  }
  return null;
}

// Okay - optimized solution
// Time complexity - O(n log n)
// space complexity = O(1)

const findTwoSumOkayOpti = function (nums, target) {
  // always array sorted in ascending order
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
  return null;
}

// well - optimized solution
// Time complexity = O(n);
// space complexity = O(n);
const findTwoSumOptimized = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    const currentValueMap = map[nums[i]];
    if (currentValueMap >= 0) {
      return [nums[currentValueMap], nums[i]]
    }
    const numberToFind = target - nums[i];
    map[numberToFind] = i;
  }
  return [];
}

const subsqeuence = (array = [], sequence) => {
  let seqIDX = 0;
  for (const value of array) {
    if (seqIDX === sequence.length) break;
    if (sequence[seqIDX] === value) seqIDX++;
  }

  return seqIDX === sequence.length
}


console.log(subsqeuence( [5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
