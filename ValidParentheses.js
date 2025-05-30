function isValid(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char in bracketMap) {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
