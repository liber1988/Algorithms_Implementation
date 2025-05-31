function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}
const gegeratedFunc = createFunction();
const result = gegeratedFunc(3);
console.log(result);
