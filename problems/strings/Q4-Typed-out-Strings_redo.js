// Matching the typed out strings

// Talk about the constraints

// Best case Test case - S:"ab#z" T:"az#z" o/p = True
// s: "abc#d" T:"acc#c" - False
// Both empty strings - True
// S:"Ab#z" T:"ab#z"

const backSpaceOpti = (s1 = '', s2 = '') => {
  let p1 = s1.length - 1;
  let p2 = s2.length - 1;

  while (p1 >=0 || p2 >=0) {
    if (s1[p1] === '#' || s2[p2] === '#') {
      if (s1[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (s1[p1] === '#'){
            backCount +=  2;
          }
        }

      } else if (s2[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (s2[p2] === '#'){
            backCount +=  2;
          }
        }
      }
    } else {
      if (s1[p1] !== s2[p2])  return false;
      p1--;
      p2--;
    }

  }

  return true;

}

console.log(backSpaceOpti('ab#z', 'az#z'))
