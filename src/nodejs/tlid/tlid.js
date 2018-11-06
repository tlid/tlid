/*@@@@
@a Optimo coding mastery separating files of code and Node.JS 
@d Nov 6, 2018 at 10:28 AM
@tlid 181106092808
@kw coding mastery,files,code,pattern,coding coding,Node.JS,files
@metatxt Good pattern of coding coding using multiple files
@s Created
@CR 

@ECR
@CTlid 0
*/

var moment = require("moment");

// tlid.js
// ========
module.exports = {
  get: function() {
    return moment().format("YYMMDDHHMMSS");
  },
  miliseconds: function() {
    return moment().format("YYMMDDHHMMSSmmm");
  },
  ms: function() {
    return moment().format("YYMMDDHHMMSSmmm");
  },
  seconds: function() {
    return moment().format("YYMMDDHHMMSS");
  },
  minutes: function() {
    return moment().format("YYMMDDHHMM");
  },
  min: function() {
    return moment().format("YYMMDDHHMM");
  },
  hour: function() {
    return moment().format("YYMMDDHH");
  },
  day: function() {
    return moment().format("YYMMDD");
  },
  month: function() {
    return moment().format("YYMM");
  },
  year: function() {
    return moment().format("YY");
  }
};
