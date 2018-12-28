function aclean1(arr) {
  const s = new Set();
  return arr.reduce((r,v,i) => {
    v = v.toLowerCase().split('').sort().join('');
    return s.has(v) ? r : (s.add(v), [...r, arr[i]]);
  }, []);
}

function aclean2(arr) {
  const s = new Set();
  return arr.reduce((r,v,i) => {
    v = v.toLowerCase().split('').sort().join('');
    if(!s.has(v)) {
      s.add(v);
      r.push(arr[i]);
    }
    return r;
  }, []);
}

function aclean3(arr) {
  const h = arr.reduce((h, v) => {
    v = v.toLowerCase().split``.sort().join``;
    h[v] = ++h[v] || 1;
    return h;
  }, {});

  return arr.filter(v => !--h[v.toLowerCase().split``.sort().join``]);
}
