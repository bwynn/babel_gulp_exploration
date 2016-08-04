"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var a = [1, 2, 3, 4, 5];

function foo(x, y, z, w, p) {
    console.log(x + y + z + w + p);
}

//foo(...a);

//var b = [0, ...a, 6];*/

var it = a[Symbol.iterator]();

var _it = _slicedToArray(it, 2);

var x = _it[0];
var y = _it[1];
// take just the first two elements from `it`

var _it2 = _toArray(it);

var z = _it2[0];

var w = _it2.slice(1);
// take the third, then the rest all at once

// is `it` fully exhausted? Yep.

it.next(); // {value: undefined, done: true}

console.log(x);
console.log(y);
console.log(z);
console.log(w);