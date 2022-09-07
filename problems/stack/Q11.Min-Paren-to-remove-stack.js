//Given a string only containing round brackets "(" and ")" and lowercase chars
// remove the lease amount of brackets so the string is valid
// A string is considered valid if it is empty or if there are brackets, they all close
// Ex "a)bc(d)" = abc(d) =  op = 1
// Ex "(ab(c)a" = (abc)a // ab(c)a =  either case it's 1
// Ex "))((" = op = ""

//Verify constraints
//1. What do we return from our algorithm
//  Return a valid string with the fewest brackets removed

// Space complexity  = O(n)
// Time complexity = O(n);
const minRemoveToMakeValid = function (str) {
  const res = str.split("");
  const stack = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }
  while (stack.length) {
    const currentIdx = stack.pop();
    res[currentIdx] = "";
  }
  return res.join("");
};
