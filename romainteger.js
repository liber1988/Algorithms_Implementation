var romanToInt = function (s) {
  let i = 0;
  let sum = 0;
  array = s.split("");
  while (i < array.length) {
    if (array[i + 1] == "V" && array[i] == "I") {
      sum += 4;
      i += 2;
    } else if (array[i + 1] == "L" && array[i] == "X") {
      sum += 40;
      i += 2;
    } else if (array[i + 1] == "X" && array[i] == "I") {
      sum += 9;
      i += 2;
    } else if (array[i + 1] == "C" && array[i] == "X") {
      sum += 90;
      i += 2;
    } else if (array[i + 1] == "D" && array[i] == "C") {
      sum += 400;
      i += 2;
    } else if (array[i + 1] == "M" && array[i] == "C") {
      sum += 900;
      i += 2;
    } else if (array[i] == "I") {
      sum += 1;
      i++;
    } else if (array[i] == "X") {
      sum += 10;
      i++;
    } else if (array[i] == "L") {
      sum += 50;
      i++;
    } else if (array[i] == "M") {
      sum += 1000;
      i++;
    } else if (array[i] == "V") {
      sum += 5;
      i++;
    } else if (array[i] == "D") {
      sum += 500;
      i++;
    } else if (array[i] == "C") {
      sum += 100;
      i++;
    }
    console.log(sum);
  }
  return sum;
};
s = "MCMXCIV";
console.log(romanToInt(s));
