/*var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f => {
      console.log(this._name + " knows " + f);
    });
  }
};

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {done: false, value: cur}
      }
    }
  }
}

for (var n of fibonacci) {
  if (n > 1000)
    break;
    console.log(n);
}*/

// OBJECT SUPERS
// --------------------------
/*var o1 = {
  foo() {
    console.log("o1: foo");
  }
};

var o2 = {
  foo() {
    super.foo();
    console.log("o2:foo");
  }
};

Object.setPrototypeOf(o2, o1);

o2.foo();*/

// STRING LITERALS - INTERPOLITERALS
// --------------------------
/*var name = "Brian";

var greeting = `Hello ${name}!`;

console.log(greeting);*/

/*var text =
`Now is the time for all good men
to come to the aid of their
country!`;

console.log(text);*/
