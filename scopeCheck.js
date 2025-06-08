"use strict";
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  var topic = "React";
  console.log("Welcome");
}

otherClass();

console.log(teacher);
console.log(topic);
