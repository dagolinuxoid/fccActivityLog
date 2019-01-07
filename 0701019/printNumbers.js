// Solution without an initial delay before the first output
function print(from,to){
  console.log(from++);
  if (from <= to) setTimeout(print, 1000, from, to);
}

// it increment a given number forever why?
function printFlaw(from, to){
  let idInt = setInterval(()=>console.log(from++), 1000);
  if (from > to) clearInterval(idInt);
}

// it works as expected
function printGood(from, to){
  let idInt = setInterval(()=>{
    console.log(from++);
    if (from > to) clearInterval(idInt);
  }, 1000);
}
