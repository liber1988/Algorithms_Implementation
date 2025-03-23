var lengthOfLastWord = function (s) {
  const array = s.trim().split(/\s+/);
  return array[array.length - 1].length;
};
s = "Hello world ";
console.log(lengthOfLastWord(s));
