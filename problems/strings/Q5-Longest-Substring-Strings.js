// Given a string find the length of the longest non repeating substring

// "abccabb" - O/P = 3 [abc,cab]
// "ccccccc" - O/P = 1
// "" - O/P = 0
// overlapping

// own solution - does not work for overlap case
const maxLengthSubstring = (string) => {
  if (!string) return 0;
  let map = {};
  let maxLength = 0;
  let currentLength = 0;
  for (let i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = true;
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      map = {};
      currentLength = 0;
    }
  }
  return maxLength;
};

// Brute force solution
// Time complexity = O(n^2)
// Space complexity = O(n)
const maxLengthSubstringBrute = (string) => {
  if (!string) return 0;
  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {
    // O(n^2)
    let currentLength = 0;
    let map = {}; // O(n)
    for (let j = i; j < string.length; j++) {
      const currentChar = string[j];
      if (!map[currentChar]) {
        currentLength++;
        map[currentChar] = true;
        maxLength = Math.max(maxLength, currentLength);
      } else {
        break;
      }
    }
  }
  return maxLength;
};

// Optimized solution - Sliding window
// Time complexity - O(n)
// Space Complexity - O(n)
const maxLengthOpti = (string) => {
  let map = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < string.length; right++) {
    const current = string[right];
    const prevSeen = map.get(current);
    if (prevSeen >= left) {
      left = prevSeen + 1;
    }
    map.set(current, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(maxLengthOpti("abcabcbb"));
