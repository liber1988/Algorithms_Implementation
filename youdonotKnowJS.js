const myModule = (function () {
  let privateVar = "I am private";

  function privateFunc() {
    console.log(privateVar);
  }

  return {
    publicVar: "I am public",
    publicFunc: function () {
      privateFunc();
      console.log("Accessing public function");
    },
  };
})();

myModule.publicFunc();
