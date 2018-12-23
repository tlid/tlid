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
/**
  * Get a TLID (default is with seconds)
  */
function tlid__get() {
  return moment().format("YYMMDDHHMMSS");
}

/**
 * JSON Description Quoted only
 */
function tlid__json() {
  return `"tlid":"${moment().format("YYMMDDHHMMSS")}"`;
}

/**
 * JSON Object with {}
 */
function tlid__ojson() {
  return `{"tlid":"${moment().format("YYMMDDHHMMSS")}"}`;
}

/**
 * Miliseconds tlid
 */
function tlid__miliseconds() {
  return moment().format("YYMMDDHHMMSSmmm");
}

/**
  * seconds tlid
  */
function tlid__seconds() {
  return moment().format("YYMMDDHHMMSS");
}
/**
     * minutes tlid
     */
function tlid__minutes() {
  return moment().format("YYMMDDHHMM");
}

/**
   * hour tlid
   */
function tlid__hour() {
  return moment().format("YYMMDDHH");
}
/**
    * day tlid
    */
function tlid__day() {
  return moment().format("YYMMDD");
}

/**
   * month tlid
   */function
  tlid__month() {
  return moment().format("YYMM");
}

/**
  * year tlid
  */function
  tlid__year() {
  return moment().format("YY");
}

/** Extract a Tlid from a String
    * 
    * @param {*} str 
    */function
  tlid__xtr(str) {
  var numberPattern = /\d+/g;
  try {
    return str.match(numberPattern)[0];

  } catch (error) {
    return "";
  }
}


/** Extract a structure from the string
 * 
 * @param {*} str 
 */function
  tlid__xtro(str) {
  var r = new Object();
  r.tlid = "-1";
  r.src = str;
  r.txt = "";
  // r.deco = "";

  if (tlid__has(str)) {
    r.tlid = tlid__xtr(str);
    r.txt = str.replace(r.tlid, "")
      .replace("@tlid ", "");
  }

  return r;
}


/** Line has a tlid
 * 
 * @param {*} str 
 */function
  tlid__has(str) {

  var numberPattern = /\d+/g;

  return (str.match(numberPattern) != null);
}

/**  
 * 
 * @param {*} str 
 */function
  tlid__clean(str) {

  var numberPattern = /\d+/g;
  return (str.replace(numberPattern, ""));
}

// tlid.js
// ========
try {
  module.exports = {
    /**
     * Get a TLID (default is with seconds)
   */
    get: function () {
      return tlid__get();
    },
    /**
     * JSON Description Quoted only
     */
    json: function () {
      return tlid__json();
    },
    /**
     * JSON Object with {}
     */
    ojson: function () {
      return tlid__ojson();
    },
    /**
     * Miliseconds tlid
     */
    miliseconds: function () {
      return tlid__miliseconds();
    },
    /**
     * Miliseconds tlid
     */
    ms: function () {
      return tlid__miliseconds();
    },
    /**
     * seconds tlid
     */
    seconds: function () {
      return tlid__seconds();
    },
    /**
     * minutes tlid
     */
    minutes: function () {
      return tlid__minutes();
    },
    /**
     * minutes tlid
     */
    min: function () {
      return tlid__minutes();
    },
    /**
     * hour tlid
     */
    hour: function () {
      return tlid__hour();
    },
    /**
     * day tlid
     */
    day: function () {
      return tlid__day();
    },
    /**
     * month tlid
     */
    month: function () {
      return tlid__month();
    },
    /**
     * year tlid
     */
    year: function () {
      return tlid__year();
    },
    /** Extract a Tlid from a String
     * 
     * @param {*} str 
     */
    xtr: function (str) {
      return tlid__xtr(str);
    },
    /** Clean of Tlid a String
     * 
     * @param {*} str 
     */
    clean: function (str) {
      return tlid__clean(str);
    },
    /** Extract a structure from the string
     * 
     * @param {*} str 
     */
    xtro: function (str) {
      return tlid__xtro(str);
    }
    ,
    /** Line has a tlid
     * 
     * @param {*} str 
     */
    has: function (str) {

      return tlid__has(str);
    }
  };


} catch (error) {

}