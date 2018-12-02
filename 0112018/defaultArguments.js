// https://www.codewars.com/kata/default-arguments/train/javascript

// improved solution which handles state | version 0.2

let box;
function defaultArguments(fn, o) {
  let list = fn.toString().match(/\((.*?)\)/);

  if (list === null) return fn;
  let defs;

  if (list[list.length-1].includes('...')) {
    defs = box;
  }
  else {
    defs = list[list.length-1].split(',').map(v=>v.trim());
    box = defs;
  }

  defs = defs.map(v=>o[v]===undefined ? v : o[v]);

  return function hack(...args){
    defs = defs.map((v,i)=>args[i]===undefined ? v : args[i]);
    return fn(...defs);
  }
}
