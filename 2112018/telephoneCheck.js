function telephoneCheck(str) {
  const mainCheck = /^1?\s?\(?\d{3}\)?(?:\s|-)?\d{3}(?:\s|-)?\d{4}$/;
  const isHaveParen = /\(|\)/.test(str);
  const parenCheck = /\(\d{3}\)/;
  return isHaveParen
           ? mainCheck.test(str) && parenCheck.test(str)
           : mainCheck.test(str);
}
