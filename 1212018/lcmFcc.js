function smallestCommons(arr) {
  let x = Math.min(...arr);
  let y = Math.max(...arr);
  const range = [...new Array(y-x+1)].map((_,i)=>factorize(x+i));
  const lcmHash = range.reduce((lcm,o)=>{
    for (let key in o) {
      lcm[key] = Math.max(lcm[key]||1, o[key]);
    }
    return lcm;
  }, {});
  return Object.entries(lcmHash).reduce((acc, [key,value])=>acc*key**value, 1);
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

function factorize(num) {
  const factors = {};
  for(let i=0; num>1;) {
    const prime = primes[i];
    num % prime === 0
    ? (factors[prime] = ++factors[prime]||1, num /= prime)
    : ++i;
  }
  return factors;
}
