function debounce(f, ms){
  let marks = [];
  return function (...args) {
    marks.push(Date.now());
    if (marks.length === 1) {
      return f.apply(this,args);
    }
    if (marks[1] - marks[0] >= ms) {
      marks = [marks[1]];
      return f.apply(this,args);
    }
    marks = [marks[0]];
  }
}
