// container with most water

// brute force
const maxWaterBrute = function (heights) {
    let maxArea = 0;
    for (let a = 0; a < heights.length; a++) {
        for (let b = a + 1; b < heights.length; b++) {
            maxArea = Math.max(maxArea, getArea(heights[a], heights[b], b, a))
        }
    }
    return maxArea;
}

const getArea = (a, b, bi, ai) => {
    // Area = L * W;
    return Math.min(a, b) * (bi - ai);
}