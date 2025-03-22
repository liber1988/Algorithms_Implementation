function maxDepth(root, index = 0) {
  if (index >= root.length || root[index] === null) {
    return 0;
  }

  const leftDepth = maxDepth(root, 2 * index + 1);
  const rightDepth = maxDepth(root, 2 * index + 2);

  return Math.max(leftDepth, rightDepth) + 1;
}
const root = [3, 9, 20, null, null, 15, 7];
console.log(maxDepth(root));
