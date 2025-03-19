var lengthOfLongestSubstring = function (s) {
  let set = new Set(); // Store unique characters
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      // If duplicate found, move left pointer
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]); // Add new character to the set
    maxLength = Math.max(maxLength, right - left + 1); // Update max length
  }

  return maxLength;
};
s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
