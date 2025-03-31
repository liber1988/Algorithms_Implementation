var maxArea = function (heigth) {
  let left = 0;
  let right = heigth.length - 1;
  let container = 0;
  let depth = 0;
  while (left != right) {
    depth = (right - left) * Math.min(heigth[right], heigth[left]);
    if (container < depth) {
      container = depth;
    }
    heigth[right] > heigth[left] ? left++ : right--;
  }
  console.log(container);
  return container;
};
heigth = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(heigth);
