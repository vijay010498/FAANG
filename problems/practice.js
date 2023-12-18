// // // Container with Most Water
// // // Verify the constraints
// // // Example 1: [1,7,2,8,1,6] - Max = Area(7,6)
// // // Test cases:
// // // Best Case : [7,1,2,3,9] - Area(L*W) Area(7,9) = Area(4*4)
// // // Worst Case : [1,1,1,1,1] - Area(L*W) Area(1,1) = Area(0*0)
// // // [] = 0
// // // [7] = 0
// // // [6,9,3,4,5,8]
// // // Logical Brute Force Solution:
// //
// //
// // const maxWaterBrute = function (heights) {
// //     let maxArea = 0;
// //     for (let p1 = 0; p1 < heights.length; p1++) {
// //         for (let p2 = p1 + 1; p2 < heights.length; p2++) {
// //             maxArea = Math.max(maxArea, getArea(heights[p1], heights[p2], p2, p1))
// //         }
// //     }
// //     return maxArea;
// // }
// //
// // const getArea = (a, b, bi, ai) => {
// //     return Math.min(a, b) * (bi - ai);
// // }
// //
// // const maxWaterOpti = function (heights) {
// //     let p1 = 0;
// //     let p2 = heights.length - 1;
// //     let maxArea = 0;
// //     while (p1 < p2) {
// //         const area = getArea(heights[p1], heights[p2], p2, p1);
// //         maxArea = Math.max(maxArea, area);
// //         if (heights[p1] <= heights[p2]) {
// //             p1++;
// //         } else {
// //             p2--;
// //         }
// //     }
// //     return maxArea;
// // }
// //
// // console.log(maxWaterOpti([7, 1, 2, 3, 9]))
// //
// //
// // //*******************2D arrays  ********************************
// // // DFS
// // // one of the four directions
// // const testMatrix = [
// //     [1, 2, 3, 4, 5],
// //     [6, 7, 8, 9, 10],
// //     [11, 12, 13, 14, 15],
// //     [16, 17, 18, 19, 20]
// // ];
// //
// // const directions = [
// //     [-1, 0], //UP
// //     [0, 1], //right
// //     [1, 0], //DOWN
// //     [0, -1]  //left
// // ]
// //
// // const traverseDFS = function (matrix) {
// //     const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length))
// //
// //     const values = [];
// //
// //     dfs(matrix, 0, 0, seen, values)
// //     return values;
// //
// // }
// //
// // const dfs = function (matrix, row, col, seen, values) {
// //     if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return
// //     seen[row][col] = true;
// //     values.push(matrix[row][col]);
// //
// //     for (let i = 0; i < directions.length; i++) {
// //         const currentDir = directions[i];
// //         dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values)
// //     }
// // }
// //
// // //console.log(traverseDFS(testMatrix))
// //
// //
// // const traversalBFS = function (matrix) {
// //     const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length))
// //
// //     const values = [];
// //     const queue = [[0,0]]
// //     while (queue.length) {
// //         const currentPos = queue.shift();
// //         const row = currentPos[0];
// //         const col = currentPos[1];
// //         if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
// //             continue
// //         }
// //         seen[row][col] = true;
// //         values.push(matrix[row][col]);
// //         for (let i = 0; i < directions.length; i++) {
// //             const currentDir = directions[i];
// //             queue.push([row + currentDir[0], col + currentDir[1]]);
// //         }
// //     }
// //     return values
// // }
// //
// // console.log(traversalBFS(testMatrix))
// //
// //
// //
// //
// //
// //
// //
//
// //**************** Sorted rotated array *///////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8] // [4,5,6,7,0,1,2]
//
//
// const soln = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;
//
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         }
//
//         // check if left side is sorted
//         if (nums[left] <= nums[mid]) {
//             if (nums[left] <= target && target <= nums[mid]) {
//                 // target is in left
//                 right = mid - 1;
//             } else {
//                 //target is in the right
//                 left = mid + 1;
//             }
//         }
//
//         // otherwise, the right side is sorted
//         else {
//             if (nums[mid] <= target && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 2
//             }
//         }
//
//
//     }
//     return  -1;
// }
//
//
// //console.log(binarySearchRecursive([0, 1, 2, 3, 4, 5], 0, 6, 0));
// console.log(soln(arr, 3));


//[2,7,11,15]
// Two - Pointer Approach
// P1
// P2

// [2,11,15,7] = 9
//  P1 P2

// 2 + 11 = 13 !== 9

// [2,11,15,7] = 9
//  P1   P2

// 2 + 15 = 17 !== 9

// [2,11,15,7] = 90
//  P1     P2

// 2 + 7 != 90

// [2,11,15,7] = 90
//    P1  P2

// 11 + 15 = 26 !== 90

// [2,11,15,7] = 90
//    P1    P2

// 11 + 7 = 18 !== 90


// [2,11,15,7] = 90
//       P1 P2

// 15 + 7 = 22 ==  22

// [2,11,15,7] = 90
//  P1P2

// No Pair sum which === 90


// [...1000000000000000] == -10

// P1P2

// O(n^2) //  Time complexity (O of N square)
// O(1) // Space Complexity - Constant


// O(N) // Time Complexity

// 3 Tasks
// Implement two pointer in code
// [] => Sorted in ascending Order [3,4,5,6,7,8]
// O(N) => No Nested loops => only 1 loop is allowed , Space Complexity => Upto O(N) , [0,0,0,0]


// 3 -> 2- > 1 -> -4 -> 2
// head -> 3
// { val, next }
const myLL = {
  head: {
    val: 3,
    next: {val: 2, next: {val: 1, next: {val: -4, next: null}}}
  }

}



const printLL = (head) => {

  let current = head; // current = 3
  while (current) { // current = null
    console.log(current.val); // 3
    current = current.next;
  }

}

printLL(myLL.head);




















