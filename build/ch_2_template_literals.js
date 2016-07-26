"use strict";

var _templateObject = _taggedTemplateLiteral(["Everything is ", ""], ["Everything is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var desc = "awesome";

foo`everything is ${desc}!`;*/

function tag(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (s, v, idx) {
    return s + (idx > 0 ? values[idx - 1] : "") + v;
  }, "");
}

var desc = "awesome";

var text = tag(_templateObject, desc);

console.log(text);