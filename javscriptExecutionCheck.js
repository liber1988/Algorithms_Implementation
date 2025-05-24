var name = `steve`;
var age = 28;
function first() {
  var a = "First Hello";
  second();
  var x = a + name;
  console.log(x);
}

function second() {
  var b = "Second Hello";
  third();
  var y = b + name;
  console.log(y);
}

function third() {
  var c = "Third Hello!";
  var z = c + name;
  console.log(z);
}

first();
