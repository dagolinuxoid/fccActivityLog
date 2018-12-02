// https://www.codewars.com/kata/default-arguments/train/javascript

// solition that passes all tests | version 1.0

let box;

const deleteComments = (str) => {
  return str.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').replace(/\s/g,'');
};

function defaultArguments(fn, o) {
  let cleanSrc = deleteComments(fn.toString());
  let list = cleanSrc.match(/\((.*?)\)/);
  if (list === null) return fn;
  let defs;
  let argumentsStr = list[list.length-1];
  if (argumentsStr.includes('...')) {
    defs = box;
  }
  else {
    defs = argumentsStr.split(',');
    box = defs;
  }

  defs = defs.map(v=>o[v]===undefined ? v : o[v]);

  return function hack(...args){
    defs = defs.map((v,i)=>args[i]===undefined && args.length < i+1 ? v : args[i]);
    return fn(...defs);
  }
}
