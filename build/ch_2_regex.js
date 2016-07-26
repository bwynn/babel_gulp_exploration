"use strict";

// STICKY FLAGS

// EXAMPLE 1
// =============================================================================
// w/o sticky
/*var re1 = /foo/,
    str = "++foo++";

re1.lastIndex;   // 0
re1.test(str);   // true
re1.lastIndex;   // 0 -- not updated

re1.lastIndex = 4;
re1.test(str);   // true -- ignored `lastIndex`
re1.lastIndex;   // 4 -- not updated
*/

// sticky
/*var re2 = /foo/y, // <-- notice the 'y' sticky flag
    str = "++foo++";

re2.lastIndex;  // 0
re2.test(str);  // false -- 'foo' not found at '0'
re2.lastIndex;  // 0

re2.lastIndex = 2;
re2.test(str);  // true
re2.lastIndex;  // 5 -- updated to after previous match

re2.test(str);  // false
re2.lastIndex;  // 0 -- reset after previous match failure
*/

// EXAMPLE 2
// =============================================================================
var re = new RegExp("f..", "y"),
    str = "foo    far    fad";

str.match(re); // ['foo']
re.lastIndex = 10;
str.match(re); // ['far']

re.lastIndex = 20;
str.match(re); // ['fad']