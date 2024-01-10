// Given a  string, find the length of the longest
// Substring without repeating characters

// substring contiguous ?
// yes

// "abccabb" - O/P = 3 [abc,cab]
// "ccccccc" - O/P = 1
// "" - O/P = 0

// overlapping - "abcbda" -> 4 [cbda]


const longestSubstringBrute = (str = '') => {
  if (!str) return 0;
  let maxLength = Number.MIN_VALUE;


  for (let i = 0 ;i  < str.length; i++) {
    const strMap = new Map();
    let currentLength = 0;

    for (let j = i ; j< str.length; j++) {
      if (!strMap.has(str[j])) {
        currentLength++;
        strMap.set(str[j], true);
        maxLength = Math.max(maxLength, currentLength);
      } else {
        break;
      }
    }

  }

  return  maxLength;
}


// Sliding window technique
// Time complexity - O(n)
// Space Complexity - O(n)
const longestSubstringOpti = (string =  '') => {
  if (!string) return 0;
  let maxLength = Number.MIN_VALUE;
  let left = 0;
  let map = new Map();

  for (let right = 0 ; right < string.length; right++) {
    const current = string[right];
    const prevSeen = map.get(current);
    if (prevSeen >= left) {
      left = prevSeen + 1;
    }

    map.set(current, right);
    maxLength = Math.max(maxLength, (right - left) + 1);


  }


  return  maxLength;
}

console.log(longestSubstringOpti('abcbda'))