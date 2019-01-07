let i = 0;
let start = Date.now();

function count() {
  let intervalId = setInterval(() => {
    if (i === 1e9) {
      console.log("Done in " + (Date.now() - start) + 'ms');
      clearInterval(intervalId);
    }
    else {
      for(let j=0; j<1e6; j++) {
        i++;
      }
    }
  }, 0);
}

// count();

let v = 0;
let go = Date.now();
const alternative = () => {
  for (let i=0; i<1e6; i++) v++;
  if (v === 1e7) console.log(Date.now() - go), clearInterval(theId);
};
let theId = setInterval(alternative, 0);

// alternative();
