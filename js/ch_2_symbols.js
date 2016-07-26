//var sym = Symbol("some optional description");

//console.log(typeof sym); //  symbol

// the main point of a symbol is to create a string-like value that can't collide
// widh any other value. So, for example, consider using a sybmol as a constant
// representing an event name
/*const EVT_LOGIN = Symbol('event.login');

// then use EVT_LOGIN in place of a generic string literal
evthub.listen(EVT_LOGIN, function(data) {
    //
});*/

// EXAMPLE 1
// =============================================================================
/*const INSTANCE = Symbol("instance");

function HappyFace() {
    if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];

    function smile() {}

    return HappyFace[INSTANCE] = {
        smile: smile
    };
}

var me = HappyFace(),
    you = HappyFace();

console.log(me === you);*/

// EXAMPLE 2
// =============================================================================

// symbol registry
function extractValues(str) {
    var key = Symbol.for("extractValues.parse"),
        re = extractValues[key] || /[^=&]+?=([^&]+?)(?=&|$)/g,
        values = [], match;

    while (match = re.exec(str)) {
        values.push(match[1]);
    }

    return values;
}
