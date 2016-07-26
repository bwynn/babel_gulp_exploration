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

for (o.a of [1,2,3]) {
  console.log(o.a);
}

for ({x: o.a} of [{x:1}, {x:2}, {x:3}]) {
  console.log(o.a);
}
