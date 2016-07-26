"use strict";

var _it;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// EXAMPLE 1
// =============================================================================
/*var arr = [1,2,3];

var it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

// EXAMPLE 2
// =============================================================================
/*var greeting = "hello world";

var it = greeting[Symbol.iterator]();

console.log(it.next()); */

// EXAMPLE 3
// =============================================================================
/*var m = new Map();
m.set("foo", 42);
m.set({cool: true}, "hello world");

var it1 = m[Symbol.iterator]();
var it2 = m.entries();

console.log(it1.next()); // {value: ["foo", 42], done: false}
console.log(it2.next()); // {value: ["foo", 42], done:false}*/

// EXAMPLE 4
// =============================================================================
var it = (_it = {}, _defineProperty(_it, Symbol.iterator, function () {
    return this;
}), _defineProperty(_it, "next", function next() {}), _it);

//console.log(it[Symbol.iterator]() === it);

for (var v, res; (res = it.next()) && !res.done;) {
    v = res.value;
    console.log(v);
}