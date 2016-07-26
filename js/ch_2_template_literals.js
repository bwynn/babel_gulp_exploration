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
function dollabillsyall(strings, ...values) {
  return strings.reduce(function(s, v, idx) {
    if (idx > 0) {
      if (typeof values[idx-1] == "number") {
        // look, also using interpolated
        // string literals!
        s += `$${values[idx-1].toFixed(2)}`;
      }
      else {
        s += values[idx-1];
      }
    }
    return s + v;
  }, "");
}

var amt1 = 11.99,
    amt2 = amt1 * 1.08,
    name = "Brian";

var text = dollabillsyall
`Thanks for your purchase, ${name}! Your
product cost was ${amt1}, which with tax
comes out to ${amt2}.`

console.log(text);
