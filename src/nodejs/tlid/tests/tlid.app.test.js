//Test Tlid
//

var tool = require("../tlid");

console.log(tool.get());
console.log(tool.ms());
console.log(tool.hour());
console.log(tool.seconds());

console.log(tool.json());

console.log(tool.ojson());

var pattern = "@tlid 1812081400 I will be done";

console.log(tool.xtr(pattern)[0]);




var patternHasNot = " I will be done without tlid";

console.log(
    (tool.has(patternHasNot) ? `has tlid ` : `has no tlid " `)
    + ` in: "${patternHasNot}"`
);


console.log(
    (tool.has(pattern) ? `has tlid ` : `has no tlid " `)
    + ` in: "${pattern}"`
);



console.log(
    "---- Testing XTRO-----\n" +
    JSON.stringify(tool.xtro(pattern))
);


console.log("Cleared pattern : " +
    tool.clean(pattern)
);



console.log(tool.xtro(pattern));

console.log("-----todate-----" + pattern);

console.log(tool.todate(pattern));

pattern = "@tlid 181208 I will be done";

console.log("-----todate-----" + pattern);

console.log(tool.todate(pattern));

pattern = "@tlid 181208182233 I will be done";

console.log("-----todate-----" + pattern);

console.log(tool.todate(pattern));

pattern = "@tlid 18120818223344 I will be done";

console.log("-----todate-----" + pattern);

console.log(tool.todate(pattern));

pattern = "@tlid 181208182233199 I will be done";

console.log("-----todate-----" + pattern);

console.log(tool.todate(pattern));