let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

let John = new Person("John", "male", 1990);
console.log(John);

let Employee = function (name, gender, birthYear, empId, salary) {
  Person.call(this, name, gender, birthYear);
  this.empId = empId;
  this.salary = salary;
};
Employee.prototype = Person.prototype;
Employee.prototype.calcSalary = function () {
  return this.salary * 12;
};

Employee.prototype.empDetails = function () {
  console.log(this.name);
  console.log(this.empId);
};

let Mark = new Employee("Mark", "Male", 1995, 101, 12000);
console.log(Mark);
