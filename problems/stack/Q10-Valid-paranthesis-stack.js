// Given a string containing only parentheses, determine if it is valid.
// The string is valid if all parentheses are closed.
//"{([])}"

// Solution is using stack
//"{()[]}"

// Time complexity = O(N)
// Space complexity = O(N)
const parens = {
  "(": ")",
  "[": "]",
  "{": "}",
};
const isValidParantheses = function (s) {
  if (s.length === 0) return true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      if (parens[leftBracket] !== s[i]) return false;
    }
  }
  return stack.length === 0;
};
