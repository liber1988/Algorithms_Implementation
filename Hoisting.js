var john = {
  name: "John",
  sirname: "Liber",
  greetings: function () {
    console.log("Hello World");
    console.log(this);
    function check() {
      console.log(this);
    }
  },
};
console.log(john.greetings());
