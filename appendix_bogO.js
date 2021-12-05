// // const nemo = ['nemo'];
// // const large = new Array(1000000).fill('nemo');
// //
// // function findNemo(array) {
// //     let t0 = performance.now();
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] === 'nemo') {
// //             console.log("Found Nemo");
// //         }
// //     }
// //     let t1 = performance.now();
// //     console.log(`Time Taken: ${t1 - t0}`);
// // }
// //
// // findNemo(large)
//
// //space complexity
// function booo(n) {
//     for (let i = 0; i < n.length; i++) {
//         console.log("BOOOOOOOO!");
//     }
// }
//
// booo([1, 2, 3, 4, 5, 6]); //O(1)
//

// sort by frequency

// Time complexity = O(n log n)
// Space complexity = O(n)
const sortByFrequency = function (arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1;
    }
    return arr.sort((a, b) => {
        if (map[a] === map[b]) {
            return a - b;
        } else
            return map[b] - map[a];
    });
}

// Merge K sorted Array
const sol = function (arr, k) {
    let op = [];
    if (k % 2 !== 0) {
        // odd length
        let sortedExceptLast = [];
        for (let i = 0; i < arr.length - 2; i = i + 2) {
            sortedExceptLast.push(...sortTwoArray(arr[i], arr[i + 1]));
        }
        op.push(...sortTwoArray(sortedExceptLast, arr[arr.length - 1]));
    } else {
        // even length
        for (let i = 0; i < arr.length - 1; i = i + 2) {
            op.push(...sortTwoArray(arr[i], arr[i + 1]));
        }
        op.sort((a, b) => {
            return a - b;
        })
    }
    return op;
}
const sortTwoArray = function (arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.sort((a, b) => {
        return a - b;
    })
}
//console.log(sol([[1, 2, 3, 4], [0, 5, 10, 15], [2, 4, 8, 10], [3, 9, 27, 81]], 4));

// Triplet
const find3Numbers = function (arr, X) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        const gg = map[arr[i]];
        if (gg) {
            const st = new Set();
            st.add(gg[0]);
            st.add(gg[1]);
            st.add(i);
            if (st.size >= 3) {
                if (arr[gg[0]] + arr[gg[1]] + arr[i] === X)
                    return 1;
            }
        }
        for (let j = i + 1; j < arr.length; j++) {
            let numberToFind = X - (arr[i] + arr[j]);
            if (numberToFind > 0)
                map[numberToFind] = [i, j];
        }
    }
    return 0;
}

// Nuts and bolts
const bolt = function (nuts, bolts) {
    const orderStack = ['!', '#', '$', '%', '&', '*', '@', '^', '~'];
    nuts = nuts.sort((a, b) => {
        return orderStack.indexOf(a) - orderStack.indexOf(b);
    });
    bolts = bolts.sort((a, b) => {
        return orderStack.indexOf(a) - orderStack.indexOf(b);
    });
    return {nuts, bolts}
}


// Rearrange Array Alternately
// Brute Force Approach
// Time complexity = O(N)
// Space Complexity = O(N)
const rearrange = function (array) {
    let op = [];
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        op.push(array[right]);
        if (left !== right)
            op.push(array[left]);
        left++;
        right--;
    }
    for (let i = 0; i < op.length; i++) {
        array[i] = op[i];
    }
    return array;
}


const longestCommonPrefix = function (array) {
    const sortedArray = array.sort((a, b) => {
        return b.length - a.length;
    });
    let maxString = sortedArray[0];
    let common = [];

    for (let i = 0; i < maxString.length; i++) {
        let currentChar = maxString[0];
        let pushTrue = true;
        for (let j = 1; j < array.length; j++) {
            if (array[j][i] !== currentChar) {
                pushTrue = false;
                break;
            }
        }
        if (pushTrue) common.push(currentChar);
    }
    if (common.length)
        return common.join("");
    else
        return " ";
}


const solve = function (array) {
    const s = array[0];
    let op = "";
    for (let i = 0; i < s.length; i++) {
        let bol = true;
        for (let j = 1; j < array.length; j++) {
            if (array[j][i] !== s[i]) {
                bol = false;
                break;
            }
        }
        if (!bol) break;
        if (bol)
            op += s[i];
    }
    return op;
}
const log = console.log;
// container with most water
const mostWater = function (array) {
    let currentMax = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            currentMax = Math.max(currentMax, findArea(array[j], array[i], j, i));
        }
    }
    return currentMax;
}


const findArea = function (a, b, bi, ai) {
    return Math.min(a, b) * (bi - ai);
}


console.log(mostWater([1, 2, 1]));
