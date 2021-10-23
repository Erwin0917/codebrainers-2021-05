function test() {
  this.name = "Arrow function";
}

// Anonymous, auto-executed function
(function () {
  this.name = "Arrow function";
})();

(function () {
  this.name = "Arrow function";
  let o = {
    thisInRegular() {
      console.log("Example of " + this.name);
    }
  };
  o.thisInRegular();
})();

(function () {
  this.name = "Arrow function";
  let o = {
    name: "Regular function",
    thisInRegular() {
      console.log("Example of " + this.name);
    }
  };
  o.thisInRegular();
})();

(function () {
  this.name = "Arrow function";
  let o = {
    name: "Regular function",
    thisInRegular() {
      console.log("Example of " + this.name);
    },
    thisInArrow: () => {
      console.log("Example of " + this.name);
    },
  };
  o.thisInArrow();
  o.thisInRegular();
})();
