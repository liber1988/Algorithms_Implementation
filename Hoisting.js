var x = "Hello";
first();

function first() {
  var y = "First hi";
  second();
  function second() {
    var z = "hey second";
    third();
  }
}

function third() {
  var n = "Mark Third";
  console.log(x + this.y + this.z + this.n);
}
