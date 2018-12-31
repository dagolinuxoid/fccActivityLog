function getSecondsToday(){
  const curr = new Date();
  const start = new Date(curr);
  start.setHours(0,0,0);
  return (curr - start) / 1000;
}

console.log(getSecondsToday());

// second approach

function getSecondsToday(){
  const today = new Date();
  const s = today.getSeconds();
  const m = today.getMinutes();
  const h = today.getHours();
  return h*3600 + m*60 + s;
}
