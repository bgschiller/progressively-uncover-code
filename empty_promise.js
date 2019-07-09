function emptyPromise() {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  p.resolve = (val) => {
    res(val);
    return p;
  };
  p.reject = (val) => {
    rej(val);
    return p;
  };

  return p;
}
