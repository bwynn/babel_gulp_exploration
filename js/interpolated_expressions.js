function upper(s) {
  return s.toLowerCase();
}

var who = "reader";

var text =  `A very ${upper( "warm" )} welcome
to all of you ${upper( `${who}s`)}!`;

console.log(text);
