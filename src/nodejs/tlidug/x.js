var p = require("./tlidug");
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

var args = process.argv.slice(2);
var o = "";

if (args[0])  o= args[0];

var v1 = uuidv1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a' 
var v2 = uuidv4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1' 
console.log(v1);
console.log(v2);
console.log(p.get(o))
console.log(p.dashed(o))