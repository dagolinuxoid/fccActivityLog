function getMaxSubSum(arr) {
  arr = groupSimilars(cleanEdges(arr));
  let sum = arr[0];
  let maxSum = sum > 0 ? sum : 0;

  for (let i = 1; i < arr.length; i += 2) {

    const n = arr[i], p = arr[i+1];

    if (p >= Math.abs(n) && sum >= Math.abs(n)) sum += n + p;
    else sum = p;

    sum > maxSum ? maxSum = sum : 1;

  }
  return maxSum;
}
function cleanEdges (arr) {
  arr = [...arr];
  while (arr[0] <= 0) arr.shift();
  while (arr[arr.length-1] <= 0) arr.pop();
  return arr;
}
function groupSimilars (arr) {
  let reducedArr = [], box = 0;
  for (let i=0; i<arr.length;) {
    if (arr[i] >= 0)
      while (arr[i] >= 0) box += arr[i++];
    else
      while (arr[i] < 0) box += arr[i++];
    reducedArr.push(box);
    box = 0;
  }
  return reducedArr;
}
module.exports = {getMaxSubSum, cleanEdges, groupSimilars};
