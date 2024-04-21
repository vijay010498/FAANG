// buy and sell
const buySell1 = (stocks = []) => {
  let maxProfix = 0, min = stocks[0];
  for (let i = 1; i < stocks.length; i++) {
    maxProfix = Math.max(maxProfix, (stocks[i] - min))
    min = Math.min(min, stocks[i]);
  }

  return maxProfix;
}


const maxProdSubArray = (arr = []) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] !== 0) {
        prod *= arr[j]
      }
    }
    maxProduct = Math.max(maxProduct, prod)
  }

  return maxProduct;
}

const maxProdSubArra1= (arr = [] ) => {
  let max = Number.MIN_VALUE, prefix = 1, suffix = 1;
  for (let  i = 0 ; i < arr.length;i++) {
    if (prefix === 0)  prefix = 1;
    if (suffix === 0)  suffix = 1;
    prefix = prefix * arr[i];
    suffix = suffix * arr[arr.length - i - 1];
    max = Math.max(max, Math.max(prefix, suffix));
  }

  return max;
}

const longestSubStr = (str = '') => {
  let maxLength = 0;
  for (let i = 0;  i <  str.length; i++) {
    const set = new Set();
    let length = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (set.has(str[j])) break;
      length++;
      set.add(set[j]);
    }
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

const longestSubStr1 = (str = '') => {
  let maxLength = 0;
  let left = 0;
  const map = new Map();
  for (let right = 0 ; right <  str.length; right++) {
    let current  = str[right];
    const prevSeen = map.get(str[right]);
    if (prevSeen >= left) {
      left = prevSeen + 1;
    }
    map.set(current, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
}

console.log(buySell1([7, 1, 5, 3, 6, 4]));