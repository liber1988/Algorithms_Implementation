var lengthOfLongestSubstring = function (s) {
  var j = 0;
  var array = new Array();
  var dic = {};
  var subarr = [];
  var lensubarr = 0;
  array = s.split("");
  for (let i = 0; i < array.length; i++) {
    dic[array[i]] = 0;

    if (Object.keys(dic).length - 1 < i - j) {
      if (i - j > lensubarr) {
        lensubarr = i - j - 1;
        subarr = array.slice(j, i - 1);
        for (let x = j; x < i; x++) {
          if (array[x] === array[i]) {
            j = x;
          }
        }
        for (let xd = j; xd < i; xd++) {
          dic[array[xd]] = 0;
        }
        console.log(dic, i, j);
      }
    }
  }
  return subarr;
};
s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
