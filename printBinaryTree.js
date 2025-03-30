function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTreeRecursive(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;

  const node = new TreeNode(arr[i]);
  node.left = buildTreeRecursive(arr, 2 * i + 1);
  node.right = buildTreeRecursive(arr, 2 * i + 2);

  return node;
}
const arr = [1, 2, 2, null, 3, null, 3];
const root = buildTreeRecursive(arr);

function printBinaryTree(root) {
  if (root === null) {
    return;
  }
  printBinaryTree(root.right);
  printBinaryTree(root.left);
  console.log(root.right, root.left);
}

printBinaryTree(root);
