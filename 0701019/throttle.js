function throttle(f, ms) {
  let inQueue;
  let args;
  return function () {
    args = arguments;
    if (inQueue) { return; }
    f.apply(this, args);
    inQueue = true;

    setTimeout(()=> {
      f.apply(this, args);

      setTimeout(()=> {
        f.apply(this, args);
        inQueue=false;
      }, ms);

    }, ms);
  }
}
