// given an array of  positive integers
// each integer represents height vertical line on a chart
// two lines together forms container hold the greatest amount of water
// return the area of water it would hold

// test cases
// [7,1,2,3,9]
// width = from indices
// [] = 0
// [7] = 0

// [6,9,3,4,5,8]

const containerMostWaterBrute = (nums = []) => {
  let maxArea = 0;
  if (!nums.length || nums.length === 1) return maxArea;

  for (let i = 0 ; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const area = Math.min(nums[i], nums[j]) * ( j  - i);
      maxArea = Math.max(maxArea, area);
    }
  }

  return  maxArea;
}

// optimal solution
// shifting pointer solution
const containerMostWaterOptimal = (nums = []) => {
  let maxArea = 0;
  let p1 = 0, p2 = nums.length - 1;
  while ( p1 < p2 ) {
    const area = Math.min(nums[p1], nums[p2]) * (p2 - p1);
    maxArea  = Math.max(area, maxArea);
    if (nums[p1] <= nums[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}


console.log(containerMostWaterOptimal([7,1,2,3,9]));