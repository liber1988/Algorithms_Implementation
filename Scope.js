function doSomething(b) {
  console.log(b * 3);
  (function doSomethingElse() {
    var c = 3;
    console.log(c, c, c, c);
  })();
}

doSomething(2);
var b;
