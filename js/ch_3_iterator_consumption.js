var a = [1,2,3,4,5];

function foo(x,y,z,w,p) {
    console.log(x+y+z+w+p);
}

//foo(...a);

//var b = [0, ...a, 6];*/

var it = a[Symbol.iterator]();

var [x,y] = it;
// take just the first two elements from `it`
var [z, ...w] = it;
// take the third, then the rest all at once

// is `it` fully exhausted? Yep.

it.next();  // {value: undefined, done: true}

console.log(x);
console.log(y);
console.log(z);
console.log(w);
