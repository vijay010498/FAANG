//sum of pairs equal to the target

// Brute force
const findTwoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numberToFInd = target - nums[p1];
        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numberToFInd === nums[p2]) return [p1, p2];
        }
    }
}

// Okay - optimized
// nums to be sorted asce
const findTwoSumOkayOpti = function (nums, target) {
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

// well optimized
const findTwoSumOptimized = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        let currentValMap = map[nums[i]];
        if (currentValMap >= 0) {
            return [currentValMap, i];
        }
        let numberToFind = target - nums[i]
        map[numberToFind] = i;
    }
    return null;
}