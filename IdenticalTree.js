function buildTree(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;

  const node = {
    val: arr[i],
    left: buildTree(arr, 2 * i + 1),
    right: buildTree(arr, 2 * i + 2),
  };

  return node;
}
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  const leftCheck = isSameTree(p.left, q.left);
  const rightCheck = isSameTree(p.right, q.right);
  return leftCheck && rightCheck;
};
var p = [1, 2, 3, 10, 11, 12, 13];
var q = [1, 2, 3, 10, 11, 12, 13];
p = buildTree(p);
q = buildTree(q);
isSameTree(p, q);
