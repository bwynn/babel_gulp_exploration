"use strict";

// EXAMPLE 1
// =============================================================================
/*var a = ['a', 'b', 'c', 'd', 'e'];

for (var idx in a) {
  console.log(idx);
}

for (var val of a) {
  console.log(val);
}*/

// EXAMPLE 2
// =============================================================================
// pre-es6
/*var a = ['a', 'b', 'c', 'd', 'e'],
    k = Object.keys(a);

for (var val, i = 0; i < k.length; i++) {
  val = a[k[i]];
  console.log(val);
}*/
// es6 version
/*var a = ['a', 'b', 'c', 'd', 'e'];

for (var val, ret, it = a[Symbol.iterator]();
    (ret = it.next()) && !ret.done;) {
      val = ret.value;
      console.log(val);
}*/

// EXAMPlE 3
// =============================================================================

// looping over characters of a primitive string
/*for (var c of "hello") {
  console.log(c);
}*/

// EXAMPlE 4
// =============================================================================
var o = {};

var _arr = [1, 2, 3];
for (var _i = 0; _i < _arr.length; _i++) {
  o.a = _arr[_i];

  console.log(o.a);
}

var _arr2 = [{ x: 1 }, { x: 2 }, { x: 3 }];
for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
  o.a = _arr2[_i2].x;

  console.log(o.a);
}