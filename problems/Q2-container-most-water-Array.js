// container with most water - return the area  - Area = L X W

// Best Test case  - [7,1,2,3,9] - 7 * 4 = 28 [4 = 0 - 4]
// The Worst Test case
// width = subtract the indices
// [] = 0 - Empty array
// [7] = 0 -  Only one element

// Brute force solution - Two pointer solution
// Time complexity = O(n^2);
// Space complexity = O(1)
const maxWaterBrute = function (heights) {
    let maxArea = 0;
    for (let a = 0; a < heights.length; a++) {
        for (let b = a + 1; b < heights.length; b++) {
            maxArea = Math.max(maxArea, getArea(heights[a], heights[b], b, a));
        }
    }
    return maxArea;
}

// Time complexity = O(1);
// Space Complexity = NA;
const getArea = (a, b, bi, ai) => {
    // Area = L * W;
    return Math.min(a, b) * (bi - ai);
}

// optimal solution -  shifting pointer solution
// Time complexity = O(n);
// Space complexity = O(1);

const maxWater = function (heights) {
    let a = 0;
    let  b  = heights.length - 1;
    let maxArea = 0;
    while (a < b) {
        const area = getArea(heights[a],heights[b],b,a);
        maxArea = Math.max(maxArea,area);
        if (heights[a] <= heights[b]){
            a++;
        }else{
            b--;
        }
    }
    return maxArea;
}

console.log(maxWater([1, 8, 6, 2, 9, 4]));