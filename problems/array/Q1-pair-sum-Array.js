// Survey sparrow question - sum of paris equal to the target number from an array

// step - 1 :  verify the constraints
// step - 2 : Write some test cases
// step - 3 : solution without the code
// step - 5 : Double check for errors

// Brute force solution - Two pointer solution
// Time complexity = O(n^2);
// Space complexity = O(1)
const findTwoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) { // O(N)
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) { // O(N)
      if (numberToFind === nums[p2]) return [p1, p2];
    }
  }
  return null;
}

// Okay - optimized solution
// Time complexity - O(n log n)
// space complexity = O(1)

const findTwoSumOkayOpti = function (nums, target) {
  // always array sorted in ascending order
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
  return null;
}

// well - optimized solution
// Time complexity = O(n);
// space complexity = O(n);
const findTwoSumOptimized = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    const currentValueMap = map[nums[i]];
    if (currentValueMap >= 0) {
      return [nums[currentValueMap], nums[i]]
    }
    const numberToFind = target - nums[i];
    map[numberToFind] = i;
  }
  return [];
}

const subsqeuence = (array = [], sequence) => {
  let seqIDX = 0;
  for (const value of array) {
    if (seqIDX === sequence.length) break;
    if (sequence[seqIDX] === value) seqIDX++;
  }

  return seqIDX === sequence.length
}

function sortedSquaredArray(array = []) {
  const op = [];
  // Write your code here.
  array.forEach((ele, index) => {
    op.push(ele * ele);
  })
  return op.sort((a, b) => a - b);
}


// Longest Range
function largestRange(array = []) {
  const map = new Map();
  let maxLength = 0;
  let maxLengthArrays = [];
  let maxLengthRange = [];
  // add booleans into map
  array.forEach((val, index) => {
    map.set(val, false);
  });

  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    if (map.get(currentVal)) {
      continue;
    }
    let length = 1;
    const lengthArr = [currentVal];

    // traverse left
    while (true) {
      const valToFind = currentVal - 1;
      if (!map.has(valToFind) || map.get(valToFind)) {
        break;
      }
      length++;
      lengthArr.push(valToFind);
      map.set(valToFind, true);
      currentVal = valToFind;
    }

    currentVal = array[i];
    // traverse right
    while (true) {
      const valToFind = currentVal + 1;
      if (!map.has(valToFind) || map.get(valToFind)) {
        break;
      }
      length++;
      lengthArr.push(valToFind);
      map.set(valToFind, true);
      currentVal = valToFind;
    }


    map.set(currentVal, true);
    if (length >= maxLength) {
      maxLengthArrays = lengthArr;
      maxLength = length;
      maxLengthRange = [Math.min(...lengthArr), Math.max(...lengthArr)];
    }
  }
  return maxLengthRange
}

// sweet and savory problem
// given array of dishes = non zero
// - value  = sweet dish
// + value = savory
// -20 = 20 = how sweet
// 30 = how savory
// combine two dishes both sweet and savory as close to target value
// conditions: 1 sweet , 1 savory  - not too savory[not above target]
function sweetAndSavory(dishes = [], target) {
  let bestPair = [0, 0];
  const sweetDishes = [];
  const savoryDishes = [];

  for (const dish of dishes) {
    if (dish < 0) sweetDishes.push(dish)
    else savoryDishes.push(dish);
  }

  if (!sweetDishes.length || !savoryDishes.length) {
    return bestPair;
  }

  sweetDishes.sort((a, b) => b - a);
  savoryDishes.sort((a, b) => a - b);

  let sweetP = 0;
  let savoryP = 0;
  let closestVal = Number.MAX_VALUE;

  while (sweetP < sweetDishes.length && savoryP < savoryDishes.length) {
    const val = sweetDishes[sweetP] + savoryDishes[savoryP];
    if (val <= target) {
      const currentDifference = target - val;
      if (currentDifference < closestVal) {
        closestVal = currentDifference;
        bestPair = [sweetDishes[sweetP], savoryDishes[savoryP]];
      }
      savoryP++;
    } else {
      sweetP++;
    }
  }

  return bestPair;

}


function longestPeak(peaks = []) {
  // Write your code here.
  let p1 = 1;
  let maxPeak = 0;
  while (p1 < peaks.length - 1) {
    // check if the given value is peak
    if (peaks[p1] > peaks[p1 - 1] && peaks[p1] > peaks[p1 + 1]) {
      // go left to find the
      let leftP = p1 - 2;
      while (leftP >= 0 && peaks[leftP] < peaks[leftP + 1]) {
        leftP--;
      }

      // go right
      let rightP = p1 + 2;
      while (rightP < peaks.length && peaks[rightP] < peaks[rightP - 1]) {
        rightP++;
      }

      const currentPeakLength = (rightP - leftP) - 1;
      maxPeak = Math.max(maxPeak, currentPeakLength);
      p1 = rightP;
    } else {
      p1++;
    }

  }
  return maxPeak;
}

function commonCharacters(strings = []) {
  // Write your code here.

  const charMap = new Map();
  const op = [];
  for (const str of strings) {
    const strSet = new Set(str);
    strSet.forEach((val) => {
      const mapVal = charMap.has(val);
      if (mapVal) {
        charMap.set(val, charMap.get(val) + 1);
      } else charMap.set(val, 1);
    });

  }

  charMap.forEach((value, key, map) => {
    if (value === strings.length) {
      op.push(key);
    }
  })

  return op;
}


function generateDocument(characters = '', document = '') {
  if (!document.length) return  true
  const docMap = new Map();
  const charMap = new Map();

  for (let i = 0 ; i < document.length; i++) {
    const currDoc = document[i];
    docMap.has(currDoc) ? docMap.set(currDoc, docMap.get(currDoc) + 1 ) : docMap.set(currDoc, 1);
  }
  for (let i = 0 ; i < characters.length; i++) {
    const currChar = characters[i];
    charMap.has(currChar) ? charMap.set(currChar, charMap.get(currChar) + 1 ) : charMap.set(currChar, 1);
  }

  let docCreated = true;

  console.log(docMap);
  console.log(charMap);

  docMap.forEach((value, key, map) => {
    if (!charMap.has(key) || charMap.get(key) < value) {
      docCreated = false;
    }
  })


  return docCreated;
}

function semordnilap(words = []) {
  // Write your code here.
  const wordsSet = new Set(words);
  const result = [];

  console.log(wordsSet);
  words.forEach((word = '', index, array) => {
    const reverseWord = word.split('').reverse().join('');
    if (wordsSet.has(reverseWord) && reverseWord !== word) {
      result.push([word, reverseWord]);
      wordsSet.delete(word);
      wordsSet.delete(reverseWord);
    }
  });

  return result;
}


function longestSubstringWithoutDuplication(string = '') {

  let opString = [];

  for (let i = 0 ; i < string.length; i++) {
    const strMap = new Map();
    const tempString = [];
    for (let j = i ; j< string.length; j++) {
      if (!strMap.has(string[j])) {
        tempString.push(string[j]);
        strMap.set(string[j], true);
        if (tempString.length >= opString.length) {
          opString = tempString;
        }
      } else {
        break;
      }
    }
  }

  return  opString.join('');
}


const longestSubstringWithoutDuplicationOpti = (string = '') => {
  let left = 0 ;
  const map = new Map();
  let opString = [];

  for (let right = 0 ; right < string.length; right++) {
    const current = string[right];
    const prevSeen = map.get(current);
    if (prevSeen >= left) {
      left = prevSeen+1;
    }

    map.set(current, right);

    const currentWindowLength = (right - left) + 1;
    if (currentWindowLength >= opString.length  ) {
      opString =  string.split('').slice(left, right + 1);
    }
  }

  return opString.join('');

}

function underscorifySubstring(string = '', substring = '') {
  // Write your code here.
  const opi = string.split('');
  for (let i = 0; i < string.length - substring.length - 1; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (string[i+j] !== substring[j]) {
        // char not matching
        break;
      }

      if (j === substring.length - 1) {
        // substring matched
        console.log(i,j,string.split('').slice(i, i + substring.length));
        opi[i] = '_';
        opi[j + 1] = '_'
      }
    }
  }

  console.log(opi.join(''));
}



//
function caesarCipherEncryptor(string = '', key = 0) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let resultStr = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const idx = alphabet.indexOf(char);
    let newIndex = (idx + key) % 26; // Corrected calculation for newIndex

    if (newIndex < 0) {
      newIndex = 26 + newIndex; // Handling negative newIndex values
    }

    resultStr += alphabet[newIndex];
  }

  return resultStr;
}

function runLengthEncoding(string = '') {
  // Write your code here.
  let resultStr = '';
  let p1 = 0;
  let p2 = p1;
  while (p1 < string.length) {
    let length = 0;
    while (string[p1] === string[p2]) {
      p2++;
      length++
    }
    if (length > 10) {
      resultStr += getValAbove9(length, string[p1])
    } else
      resultStr += `${length}${string[p1]}`;
    // different char
    p1 = p2;
    p2 = p1;
  }
  return resultStr;
}


const getValAbove9 = (length, char) => {
  const groupof9 = Math.floor(length / 9);
  const remainder = length %  9;

  const arr = new Array(groupof9).fill(`9${char}`);
  if (remainder) arr.push(`${remainder}${char}`);
  return arr.join('');
 }

 function firstNonRepeatingCharacter(string = '') {
  const frequencyMap = new Map();
  for (let i = 0 ; i < string.length; i++) {
    if (frequencyMap.has(string[i])) frequencyMap.set(string[i], frequencyMap.get(string[i] ) + 1)
    else frequencyMap.set(string[i],1);
  }
  console.log(frequencyMap);
  for (let i = 0; i< string.length; i++) {
    if (frequencyMap.get(string[i]) > 1) {
      continue;
    }
    return i

  }
  return -1;
}

function longestPalindromicSubstring(string = '') {
  if (string.length <= 1) return string;

  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    const len1 = expandAroundCenter(string, i, i);
    const len2 = expandAroundCenter(string, i, i + 1);
    const maxLength = Math.max(len1, len2);

    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return string.substring(start, end + 1);
}

const expandAroundCenter = (string, left, right) => {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}



// remove duplicates from linked List
// nodes are in sorted order
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
 let currentNode = linkedList;
 while (currentNode) {
   let next = currentNode.next;
   while (next && next.value === currentNode.value) {
     next = next.next;
   }
   currentNode.next = next;
   currentNode = next;
 }
  // Write your code here.
  return linkedList;
}


// return middle node
// fast and slow pointer

function middleNode(linkedList) {
  // Write your code here.
  let slowPointer = linkedList;
  let fastPointer = linkedList;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next
  }

  return slowPointer;

}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let newLinkedListHeadPointer = new LinkedList(0);
  let currentNode = newLinkedListHeadPointer;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    let valueOne = nodeOne ? nodeOne.value : 0;
    let valueTwo = nodeTwo ? nodeTwo.value : 0;
    let sumOfValues = valueOne + valueTwo + carry;

    let newValue = sumOfValues % 10;
    carry = Math.floor(sumOfValues / 10); // Update carry by taking the integer division

    const newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    nodeOne = nodeOne ? nodeOne.next : null;
    nodeTwo = nodeTwo ? nodeTwo.next : null;
  }

  return newLinkedListHeadPointer.next;
}

