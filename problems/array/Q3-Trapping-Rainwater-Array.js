// Trapping rainwater - Hard - Elevation Map

// step - 1  verify the constraints
// Success Test case - [0,1,0,2,1,0,3,1,0,1,2] - 8
// [] - 0
// [3] - 0
// [3,4,3] - 0 (water will fall of)

// Brute Force solution
// Space Complexity = O(1)
// Time Complexity  - O(n^2)
const maxTrapWaterBrute = (elevationMap) => {
    let totalWaterArea = 0;
    for (let p = 0; p < elevationMap.length; p++) {
        let maxLeft = 0;
        let maxRight = 0;
        let leftP = p;
        let rightP = p;

        // find max left
        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, elevationMap[leftP]);
            leftP--;
        }
        // find max right
        while (rightP <= elevationMap.length - 1) {
            maxRight = Math.max(maxRight, elevationMap[rightP]);
            rightP++;
        }
        let currentWater = Math.min(maxLeft, maxRight) - elevationMap[p];
        if (currentWater > 0) {
            totalWaterArea += currentWater;
        }
    }
    return totalWaterArea;
}

// Optimized solution
// Time complexity - O(n)
// space complexity - O(1)

// steps
//  1. Identify pointer with lesser value
//  2. Is this pointer is greater than or equal to max on that side
//  3. If yes -> update max on that side
//  4. If No -> get water for that pointer , add to the total
//  5. move pointer inwards
//  6. Repeat this for other pointer

const maxTrapWaterOpti = (elevationMap) => {
    let totalWaterArea = 0;
    let left = 0;
    let right = elevationMap.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (elevationMap[left] <= elevationMap[right]) {
            if (elevationMap[left] >= leftMax) {
                leftMax = elevationMap[left];
            } else{
                totalWaterArea +=leftMax -  elevationMap[left];
            }
            left++;
        }
        else {
            if (elevationMap[right] >= rightMax) {
                rightMax = elevationMap[right]
            } else{
                totalWaterArea += rightMax - elevationMap[right];
            }
            right--;
        }
    }
    return totalWaterArea;
}


console.log(maxTrapWaterOpti([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))