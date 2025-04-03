function canConstruct(ransomNote, magazine) {
  // Create a hash table to store the frequency of each letter in magazine
  const letterCounts = new Map();

  // Populate the hash table with the frequency of each letter in magazine
  for (const char of magazine) {
    letterCounts.set(char, (letterCounts.get(char) || 0) + 1);
  }

  // Check if ransomNote can be constructed
  for (const char of ransomNote) {
    const count = letterCounts.get(char) || 0;
    if (count === 0) {
      return false; // Letter not available or already used up
    }
    letterCounts.set(char, count - 1); // Decrement the count
  }

  return true;
}

// Example usage:
console.log(canConstruct("aa", "aab")); // Output: true
console.log(canConstruct("aa", "ab")); // Output: false

let ransomNote = "aa";
let magazine = "aab";
