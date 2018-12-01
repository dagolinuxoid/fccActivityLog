// https://www.codewars.com/kata/default-arguments/train/javascript

// my initial solution which doesn't work
function defaultArguments(fn, o) {
  let list = fn.toString().match(/\((.*?)\)/);
  if (list === null) return fn;
  let defs = list[list.length-1].split(',').map(v=>v.trim());

  defs = defs.map(v=>o[v]===undefined ? v : o[v]);

  return function (...args){
    defs = defs.map((v,i)=>args[i]===undefined ? v : args[i]);
    return fn(...defs);
  }
}
