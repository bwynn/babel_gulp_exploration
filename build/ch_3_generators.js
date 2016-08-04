"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

// EXAMPLE 1
// =============================================================================
/*function *foo() {
    var x = yield 10;
    console.log(x);
}*/

// EXAMPLE 2
// =============================================================================
function foo() {
    var x, y, z;
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    x = 10;
                    y = 20;
                    _context.next = 4;
                    return;

                case 4:
                    z = x + y;

                case 5:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}