// Problem Statement: Given a circular integer array A, return the next greater element for every element in A. The next greater element for an element x is the first element greater than x that we come across while traversing the array in a clockwise manner. If it doesn't exist, return -1 for this element.
//
// Examples:
//
//   Example 1:
//
// Input: N = 11, A[] = {3,10,4,2,1,2,6,1,7,2,9}
//
// Output: 10,-1,6,6,2,6,7,7,9,9,10
//
// Explanation: For the first element in A ,i.e, 3, the greater element which comes next to it while traversing and is closest to it is 10. Hence,10 is present on index 0 in the resultant array. Now for the second element,i.e, 10, there is no greater number and hence -1 is it’s next greater element (NGE). Similarly, we got the NGEs for all other elements present in A.


function nextGreaterElement(nums1 = [], nums2 = []) {
  const nums1Map = new Map(nums1.map((num, index) => [num, index]));
  const result = new Array(nums1.length).fill(-1);
  nums2.forEach((num, index) => {
    if (nums1Map.has(num)) {
      for (let i = index + 1; i < nums2.length;i++) {
        if (nums2[i]  > num) {
          result[nums1Map.get(num)] = nums2[i];
          break;
        }
      }
    }
  });
  return result;
}


console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]))