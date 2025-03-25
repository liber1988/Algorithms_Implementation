var invertTree = function (root) {
  if (root == null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
function buildTree(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;

  const node = {
    val: arr[i],
    left: buildTree(arr, 2 * i + 1),
    right: buildTree(arr, 2 * i + 2),
  };

  return node;
}
root = [4, 2, 7, 1, 3, 6, 9];
node = buildTree(root);
console.log(invertTree(node));
