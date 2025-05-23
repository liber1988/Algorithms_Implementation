function canConstruct(ransomNote, magazine) {
  const letterCounts = new Map();

  for (const char of magazine) {
    letterCounts.set(char, (letterCounts.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = letterCounts.get(char) || 0;
    if (count === 0) {
      return false;
    }
    letterCounts.set(char, count - 1);
  }

  return true;
}

// Example usage:
console.log(canConstruct("aa", "aab")); // Output: true
console.log(canConstruct("aa", "ab")); // Output: false

let ransomNote = "aa";
let magazine = "aab";
