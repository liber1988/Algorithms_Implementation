let john = {
  name: "John",
  sirname: "Liber",

  getSirname() {
    return this.sirname;
  },

  setName(name) {
    this.name = name;
  },
};

let john1 = {
  name: "John",
  sirname: "Liber",

  get getSirname() {
    return this.sirname;
  },

  set setName(name) {
    this.name = name;
  },
};
john.setName("Steve");
console.log(john.name);
console.log(john.getSirname());
