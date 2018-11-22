function solve(arr){
  arr = cleanEdges(arr);
  if (arr.every(e=>e>0)) {
    return arr.reduce((sum,e)=>sum+e,0);
  }
  arr = groupSimilars(arr);
  const sums = [arr[0]];
  let sum = arr[0], curr = arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    const n = arr[i], p = arr[i+1];
    if (p >= Math.abs(n) && sum >= Math.abs(n)) {
      sum += p + n;
      curr += p + n;
    } else {
      p >= sum
      ? curr = sum = p
      : sums.push[sum], curr = sum = p;
    }
  }
  sums.push[sum];
  return sums.some(v=>v>curr)
    ? Math.max(...sums)
    : curr;
}
function cleanEdges (arr) {
  arr = [...arr];
  while (arr[0] <= 0) arr.shift();
  while (arr[arr.length-1] <= 0) arr.pop();
  return arr;
}
function groupSimilars (arr) {
  let reducedArr = [], box = 0;
  for (let i=0; i<arr.length;){
    if (arr[i] >= 0)
      while (arr[i] >= 0) box += arr[i++];
    else
      while (arr[i] < 0) box += arr[i++];
    reducedArr.push(box);
    box = 0;
  }
  return reducedArr;
}
module.exports = {solve, cleanEdges, groupSimilars};
