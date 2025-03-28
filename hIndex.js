var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // sort descending
  let h = 0;
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
};

citations = [3, 0, 6, 1, 5, 4, 5, 4, 5];
console.log(hIndex(citations));
