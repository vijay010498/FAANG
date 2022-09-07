// Determine the string is palindrome

// "aabaa"  - O/P = True
// "abc" - O/P = False
// "" - True
// A man, a plan, a canal : Panama - O/P = True

const isValid = function (string) {
    // Regex to hold only characters
    string = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] !== string[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

// Almost a Palindrome - By removing a 1 character
// Palindrome = Almost Palindrome
// Time complexity = O(n)
// Space Complexity = O(1)
const almostPalindrome = function (string) {
    let left = 0;
    let right = string.length - 1;
    string = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    while (left < right) {
        if (string[left] !== string[right]) {
            return (validSubPalindrome(string, left + 1, right) || validSubPalindrome(string, left, right - 1))
        }
        left++;
        right--;
    }

    return true;
}

const validSubPalindrome = function (string, left, right) {
    while (left < right) {
        if (string[left] !== string[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}