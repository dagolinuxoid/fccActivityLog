// solution: @yongje_joung refactoring: @dagolinuxoid
function getMaxSubSum(arr){
  let sum = 0, max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum > max) { max = sum; }
    const p = arr[i-1], c = arr[i], n = arr[i+1]; // previous current next
    if (c < 0) {
      if ((p + c > 0) && (c + n > 0)) { sum += c + n; }
        else if (n > 0) { sum = n; }
    } else {
      if (!p) { sum = c; }
      if (n > 0) { sum += n; }
    }
  }
  return max;
}

module.exports = getMaxSubSum;
