function isValidSudoku(board) {
  // Helper to check if an array has duplicates (ignoring ".")
  const hasNoDuplicates = (arr) => {
    const nums = arr.filter((val) => val !== ".");
    return new Set(nums).size === nums.length;
  };

  // Check rows
  for (let row = 0; row < 9; row++) {
    if (!hasNoDuplicates(board[row])) return false;
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
    const column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (!hasNoDuplicates(column)) return false;
  }

  // Check 3x3 boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          box.push(board[boxRow * 3 + i][boxCol * 3 + j]);
        }
      }
      if (!hasNoDuplicates(box)) return false;
    }
  }

  return true;
}
var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
