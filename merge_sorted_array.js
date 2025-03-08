var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = m; i < n + m; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  for (let i = 0; i < m; i++) {
    if (nums1[i] > nums1[m]) {
      let change = nums1[i];
      console.log("i was here");
      nums1[i] = nums1[m];
      nums1[m] = change;
      for (let i = m; i < n + m - 1; i++) {
        if (nums1[i] > nums1[i + 1]) {
          let change = nums1[i];
          nums1[i] = nums1[i + 1];
          nums1[i + 1] = change;
        }
      }
    }
  }
};
let nums1 = [4, 0, 0, 0, 0, 0];
let m = 1;
let nums2 = [1, 2, 3, 5, 6];
let n = 5;
console.log(merge(nums1, m, nums2, n));
