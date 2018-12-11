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
  /**
   * Get a TLID (default is with seconds)
   */
  get: function () {
    return moment().format("YYMMDDHHMMSS");
  },
  /**
   * JSON Description Quoted only
   */
  json: function () {
    return `"tlid":"${moment().format("YYMMDDHHMMSS")}"`;
  },
  /**
   * JSON Object with {}
   */
  ojson: function () {
    return `{"tlid":"${moment().format("YYMMDDHHMMSS")}"}`;
  },
  /**
   * Miliseconds tlid
   */
  miliseconds: function () {
    return moment().format("YYMMDDHHMMSSmmm");
  },
  /**
   * Miliseconds tlid
   */
  ms: function () {
    return moment().format("YYMMDDHHMMSSmmm");
  },
  /**
   * seconds tlid
   */
  seconds: function () {
    return moment().format("YYMMDDHHMMSS");
  },
  /**
   * minutes tlid
   */
  minutes: function () {
    return moment().format("YYMMDDHHMM");
  },
  /**
   * minutes tlid
   */
  min: function () {
    return moment().format("YYMMDDHHMM");
  },
  /**
   * hour tlid
   */
  hour: function () {
    return moment().format("YYMMDDHH");
  },
  /**
   * day tlid
   */
  day: function () {
    return moment().format("YYMMDD");
  },
  /**
   * month tlid
   */
  month: function () {
    return moment().format("YYMM");
  },
  /**
   * year tlid
   */
  year: function () {
    return moment().format("YY");
  },
  /** Extract a Tlid from a String
   * 
   * @param {*} str 
   */
  xtr: function (str) {
    var numberPattern = /\d+/g;
    try {
      return str.match(numberPattern)[0];

    } catch (error) {
      return "";
    }
  },
  /** Extract a structure from the string
   * 
   * @param {*} str 
   */
  xtro: function (str) {
    var r = new Object();
    r.tlid = "-1";
    r.src = str;
    r.txt = "";
    // r.deco = "";

    if (this.has(str)) {
      r.tlid = this.xtr(str);
      r.txt = str.replace(r.tlid, "")
        .replace("@tlid ", "");
    }

    return r;
  }
  , has: function (str) {

    var numberPattern = /\d+/g;

    return (str.match(numberPattern) != null);
  }
};
