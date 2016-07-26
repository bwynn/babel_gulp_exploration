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
var tasks = {
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

it.next(); // {done: true}