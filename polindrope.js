var isPalindrome = function (word) {
  word = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversed = word.split("").reverse().join("");

  return word === reversed;
};
const words = "A man, a plan, a canal: Panama";
console.log(isPalindrome(words));
