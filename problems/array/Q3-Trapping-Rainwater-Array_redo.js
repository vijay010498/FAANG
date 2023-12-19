// Hard
// Trapping rain water
// given array of integers
// elevation map  width of each bar is 1
// return how much rainwater can be trapped

const trapWaterBrute  = (elevationMap = []) => {
  let totalWater = 0;
  for (let p = 0 ; p < elevationMap.length; p++) {
    let maxLeft = 0 ;
    let maxRight = 0 ;
    let leftP = p;
    let rightP = p;

    // find max left
    while (leftP > 0) {
      maxLeft = Math.max(maxLeft, elevationMap[leftP]);
      leftP--;
    }

    // find max right

    while (rightP <= elevationMap.length - 1) {
      maxRight = Math.max(maxRight, elevationMap[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - elevationMap[p];
    if (currentWater > 0) {
      totalWater += totalWater;
    }
  }
  return totalWater;
}

const trapWaterOpti = (elevationMap = []) => {
  let totalWaterArea = 0;
  let left = 0;
  let right = elevationMap.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (elevationMap[left] <= elevationMap[right]) {
      if (elevationMap[left] >= leftMax) {
        leftMax = elevationMap[left];
      } else {
        totalWaterArea += leftMax - elevationMap[left];
      }
      left++;
    } else {
      if (elevationMap[right] >= rightMax) {
        rightMax = elevationMap[right];
      } else {

        totalWaterArea += rightMax - elevationMap[right]
      }
      right--;
    }
  }
  return totalWaterArea;
}