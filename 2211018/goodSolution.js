const getMaxSubSum = arr => {
  let res = 0, sum = 0;
  arr.forEach(v => {
    if ((sum += v) > res) res = sum;
    if (sum < 0) sum = 0;
  });
  return res;
}

module.exports = getMaxSubSum;
