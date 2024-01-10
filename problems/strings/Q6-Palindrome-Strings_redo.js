// string is a palindrome ?

// a palindrome ?
// only alphanumeric
// ignore case sensitivity

// verify constraints

// "aabaa"  = true
// "aabbaa" = true
// "abc" = false
// A man, a plan, a canal : Panama - O/P = True

const isValidPalindrome = (string = '') => {
  string = string.replace(/[^A-za-z0-9]/g,"").toLowerCase();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}


// Almost a Palindrome - By removing a 1 character
// Palindrome = Almost Palindrome

const almostPalindrome = (string = '') => {
  string = string.replace(/[^A-za-z0-9]/g,"").toLowerCase();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return (validSubPalindrome(string, left+1, right) || validSubPalindrome(string, left, right - 1));
    }
    left++;
    right--;
  }
  return true;
}

const validSubPalindrome = (string, left, right) => {
  while (left < right) {
    if (string[left] !== string[right]){
      return false
    }
    left++;
    right--
  }
  return true;
}

console.log(almostPalindrome('race a car'));