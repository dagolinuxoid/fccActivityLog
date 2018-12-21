function convertToRoman(num){
  const getBase = (number) => [...''+number]
    .reverse()
    .map((numeralStr, i) => numeralStr * 10**i)
    .reverse();
  const list = [1,5,10,50,100,500,1000];
  const hash = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  const bases = getBase(num);

  return bases.map(n => {
    if (hash[n])
      return hash[n];

    let times;
    let roman;
    let index = list.length-1;
    let factor = list[index];
    while (n) {
      n >= factor
      ? (times = n/factor |0, roman += hash[factor].repeat(times), n %= factor)
      : factor = list[--index];
    }
    return roman;
  })
  .join('');

}

console.log(convertToRoman(91));
