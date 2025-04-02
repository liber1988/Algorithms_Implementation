var spiralOrder = function (matrix) {
  let array = [];
  let m = matrix.length;
  let n = matrix[0].length;

  let m_start = 0;
  let n_start = 0;
  let l = 0;

  outer: while (l < 100) {
    for (let i = n_start; i < n; i++) {
      if (!Number.isNaN(matrix[m_start][i])) {
        array.push(matrix[m_start][i]);
        matrix[m_start][i] = NaN;
      } else {
        break outer;
      }
    }
    m_start++;

    for (let i = m_start; i < m; i++) {
      if (!Number.isNaN(matrix[i][n - 1])) {
        array.push(matrix[i][n - 1]);
        matrix[i][n - 1] = NaN;
      } else {
        break outer;
      }
    }
    n--;

    for (let i = n - 1; i >= n_start; i--) {
      if (!Number.isNaN(matrix[m - 1][i])) {
        array.push(matrix[m - 1][i]);
        matrix[m - 1][i] = NaN;
      } else {
        break outer;
      }
    }
    m--;

    for (let i = m - 1; i >= m_start; i--) {
      if (!Number.isNaN(matrix[i][n_start])) {
        array.push(matrix[i][n_start]);
        matrix[i][n_start] = NaN;
      } else {
        break outer;
      }
    }
    n_start++;

    l++;
  }

  return array;
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));
