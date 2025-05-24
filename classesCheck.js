let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  const age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};
class Emploeer extends Person {
  constructor(name, gender, birthYear, empid, salary) {
    super(name, gender, birthYear);
    this.empid = empid;
    this.salary = salary;
  }
}

let mark = new Emploeer("mark", "male", 1995, 201, 190000);
console.log(mark);
