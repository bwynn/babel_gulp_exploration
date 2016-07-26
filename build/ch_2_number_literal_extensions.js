"use strict";

// EXAMPLE 1
// =============================================================================
var dec = 42,
    oct = 42,
    hex = 0x2a,
    bin = 42;

Number("42");
Number("0o52");
Number("0x2a");
Number("Ob101010");

// and in reverse
var a = 42;

a.toString(); // "42"
a.toString(8); // "52"
a.toString(16); // "2a"
a.toString(2); // "101010"