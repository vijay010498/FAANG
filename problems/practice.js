// Container with Most Water
// Verify the constraints
// Example 1: [1,7,2,8,1,6] - Max = Area(7,6)
// Test cases:
// Best Case : [7,1,2,3,9] - Area(L*W) Area(7,9) = Area(4*4)
// Worst Case : [1,1,1,1,1] - Area(L*W) Area(1,1) = Area(0*0)
// [] = 0
// [7] = 0
// [6,9,3,4,5,8]
// Logical Brute Force Solution:


const maxWaterBrute = function (heights) {
    let maxArea = 0;
    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            maxArea = Math.max(maxArea, getArea(heights[p1], heights[p2], p2, p1))
        }
    }
    return maxArea;
}

const getArea = (a, b, bi, ai) => {
    return Math.min(a, b) * (bi - ai);
}

const maxWaterOpti = function (heights) {
    let p1 = 0;
    let p2 = heights.length - 1;
    let maxArea = 0;
    while (p1 < p2) {
        const area = getArea(heights[p1], heights[p2], p2, p1);
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}

console.log(maxWaterOpti([7, 1, 2, 3, 9]))


