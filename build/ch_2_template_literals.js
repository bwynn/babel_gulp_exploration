"use strict";

var _templateObject = _taggedTemplateLiteral(["Thanks for your purchase, ", "! Your\nproduct cost was ", ", which with tax\ncomes out to ", "."], ["Thanks for your purchase, ", "! Your\nproduct cost was ", ", which with tax\ncomes out to ", "."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// EXAMPLE 1
// =============================================================================

/*function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var desc = "awesome";

foo`everything is ${desc}!`;*/

// EXAMPLE 2
// =============================================================================

/*function tag(strings, ...values) {
  return strings.reduce(function(s,v,idx) {
    return s + (idx > 0 ? values[idx-1]: "") + v;
  }, "");
}

var desc = "awesome";

var text = tag`Everything is ${desc}`;

console.log(text);*/

// EXAMPLE 3
// =============================================================================
function dollabillsyall(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (s, v, idx) {
    if (idx > 0) {
      if (typeof values[idx - 1] == "number") {
        // look, also using interpolated
        // string literals!
        s += "$" + values[idx - 1].toFixed(2);
      } else {
        s += values[idx - 1];
      }
    }
    return s + v;
  }, "");
}

var amt1 = 11.99,
    amt2 = amt1 * 1.08,
    name = "Brian";

var text = dollabillsyall(_templateObject, name, amt1, amt2);

console.log(text);