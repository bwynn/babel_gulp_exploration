"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// EXAMPLE 1
// =============================================================================
/*var Fib = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 1;

        return {
            // make the iterator an iterable
            [Symbol.iterator]() {return this;},
            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return {value: current, done: false};
            },
            return(v) {
                console.log("Fibonacci sequence abandoned.");
                return {value: v, done: true};
            }
        };
    }
};

for (var v of Fib) {
    console.log(v);
    if (v > 50) break;
}*/

// EXAMPLE 2
// =============================================================================
/*var tasks = {
    [Symbol.iterator]() {
        var steps = this.actions.slice();

        return {
            // make the iterator iterable
            [Symbol.iterator]() {return this;},
            next(...args) {
                if (steps.length > 0) {
                    let res = steps.shift()(...args);
                    return {value: res, done: false};
                }
                else {
                    return {done: true}
                }
            },
            return(v) {
                steps.length = 0;
                return {value: v, done: true};
            }
        };
    },
    actions: []
};

tasks.actions.push(
    function step1(x) {
        console.log("step 1:", x);
        return x * 2;
    },
    function step2(x, y) {
        console.log("step 2: ", x, y);
        return x + (y * 2);
    },
    function step3(x,y,z) {
        console.log("step 3: ", x,y,z);
        return (x * y) + z;
    }
);

var it = tasks[Symbol.iterator]();

it.next(10); // step 1: 10
             // {value: 20, done: false}

it.next(20, 50); // step 2: 20 50
                 // {value: 120, done: false}

it.next(20, 50, 120); // step 3: 20 50 120
                      // {value: 1120, done: false}

it.next(); // {done: true}*/

// EXAMPLE 3
// =============================================================================
if (!Number.prototype[Symbol.iterator]) {
    Object.defineProperty(Number.prototype, Symbol.iterator, {
        writable: true,
        configurable: true,
        enumerable: false,
        value: function iterator() {
            var _ref;

            var i,
                inc,
                done = false,
                top = +this;

            // iterate positively or negatively?
            inc = 1 * (top < 0 ? -1 : 1);

            return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
                return this;
            }), _defineProperty(_ref, "next", function next() {
                if (!done) {
                    // initial iteration always 0
                    if (i == null) {
                        i = 0;
                    }
                    // iterating positively
                    else if (top >= 0) {
                            i = Math.min(top, i + inc);
                        }
                        // iterating negatively
                        else {
                                i = Math.max(top, i + inc);
                            }

                    // done after this iteration ?
                    if (i == top) done = true;

                    return { value: i, done: false };
                } else {
                    return { done: true };
                }
            }), _ref;
        }
    });
}

var _arr = [].concat(_toConsumableArray(-3));

for (var _i = 0; _i < _arr.length; _i++) {
    var i = _arr[_i];
    console.log(i);
}