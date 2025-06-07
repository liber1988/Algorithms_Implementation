function userCreator(name, score) {
  this.score = score;
  this.name = name;
}

userCreator.prototype.increment = function () {
  this.score++;
};
userCreator.prototype.login = function () {
  console.log("Login in was sunccessefully");
};

const user1 = new userCreator("Phil", 4);

user1.increment();
console.log(user1);
