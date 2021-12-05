// Welcome back
// up until the point


// Matching the typed out strings

// Talk about the constraints

// Best case Test case - S:"ab#z" T:"az#z" o/p = True
// s: "abc#d" T:"acc#c" - False
// Both empty strings - True
// S:"Ab#z" T:"ab#z"


// Generic function
// Time complexity = O(n)
// Space Complexity = O(n)
const buildString = function (string) {
    const builtArray = [];
    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            builtArray.push(string[p])
        } else {
            builtArray.pop();
        }
    }
    return builtArray;
}

// Brute Force Approach
// Time complexity - O(n+m)
// Space Complexity - O(n+m)
const backSpaceCompare = function (S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    if (finalS.length !== finalT.length) return false;
    else {
        for (let p = 0; p < finalS.length; p++) {
            if (finalS[p] !== finalT[p]) return false;
        }
    }
    return true;
}

// optimized solution
// Time Complexity = O(n + m)
// Space Complexity = O(1)
const backSpace = function (S, T) {
    let p1 = S.length - 1;
    let p2 = T.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (S[p1] === '#' || T[p2] === '#') {
            if (S[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if (S[p1] === '#') {
                        backCount = backCount + 2;
                    }
                }
            } else if (T[p2] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p2--;
                    backCount--;
                    if (T[p2] === '#') {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) return false;
            else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}
console.log(backSpace("ab#z", "az#z"))