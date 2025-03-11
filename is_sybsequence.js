var isSubsequence = function (s, t) {
  let pointer = 0;
  s = s.split("");
  t = t.split("");
  for (let i of t) {
    if (i == s[pointer]) {
      pointer++;
    }
  }
  console.log(pointer);
  if (pointer == s.length) {
    return true;
  } else {
    return false;
  }
};
let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));
