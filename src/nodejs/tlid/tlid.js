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
  return moment().format("yyMMddHHmmss");
}


var debugDt = false;
/** Return a Date from a Tlid String
 * @param {string} tlidStr
 * */
function tlid__toDate(str) {
  // var dt = new Date(str); //@s 181223 Wont work as it require "-"
  var tlidValue = tlid__xtr(str);
  var r = "";

  var y = "20" + getchk_sub(tlidValue, 0, 2); // will bug in 82 years, well, I am not pessimistic here but possibly will not be there or if I do, I wont care so much... I must add a reminder for 2099/12/31 to update tlid.todate.... ;)

  var m = getchk_sub(tlidValue, 2, 4) - 1;
  var d = getchk_sub(tlidValue, 4, 6);

  r = `${y}/${m != "" ? m : 1}/${d != "" ? d : 1}`;

  if (debugDt) console.log(`Year: ${y}`);
  if (debugDt) console.log(`Month: ${m}`);
  if (debugDt) console.log(`Day: ${d}`);
  var h = "00";
  var M = "00";
  var s = "00";
  var ms = "000";

  try {

    h = getchk_sub(tlidValue, 6, 8);
    if (debugDt) console.log(`Hour: ${h}`);




    M = getchk_sub(tlidValue, 8, 10);
    if (debugDt) console.log(`Minutes: ${M}`);



    s = getchk_sub(tlidValue, 10, 12);
    if (debugDt) console.log(`Seconds: ${s}`);



    ms = getchk_sub(tlidValue, 12, 13);
    ms = getchk_sub(tlidValue, 12, 14);
    ms = getchk_sub(tlidValue, 12, 15);
    ms = getchk_sub(tlidValue, 12, 16);

    if (debugDt) console.log(`MiliSeconds: ${ms}`);


  } catch (error) {

  }
  if (debugDt) console.log("R: " + r);

  var dt = new Date(r);

  if (y != "")
    if (m != "")
      if (d != "")
        if (h != "")
          if (M != "")
            if (s != "")
              if (ms != "")
                dt = new Date(Date.UTC(y, m, d, h, M, s, ms));
              else
                dt = new Date(Date.UTC(y, m, d, h, M, s));
            else
              dt = new Date(Date.UTC(y, m, d, h, M));
          else
            dt = new Date(Date.UTC(y, m, d, h));
        else
          dt = new Date(Date.UTC(y, m, d));
      else
        dt = new Date(Date.UTC(y, m));
    else
      dt = new Date(Date.UTC(y));

  if (debugDt) console.log("TZ: " + dt.getTimezoneOffset());

  return dt;
}

function getchk_sub(str, s, e) {
  try {
    return str.substring(s, e);
  } catch (error) {
    return "";
  }
}
/**
 * JSON Description Quoted only
 */
function tlid__json() {
  return `"tlid":"${moment().format("yyMMddHHmmss")}"`;
}

/**
 * JSON Object with {}
 */
function tlid__ojson() {
  return `{"tlid":"${moment().format("yyMMddHHmmss")}"}`;
}

/**
 * Miliseconds tlid
 */
function tlid__miliseconds() {
  return moment().format("yyMMddHHmmssmmm");
}

/**
  * seconds tlid
  */
function tlid__seconds() {
  return moment().format("yyMMddHHmmss");
}
/**
     * minutes tlid
     */
function tlid__minutes() {
  return moment().format("yyMMddHHmm");
}

/**
   * hour tlid
   */
function tlid__hour() {
  return moment().format("yyMMddHH");
}
/**
    * day tlid
    */
function tlid__day() {
  return moment().format("yyMMdd");
}

/**
   * month tlid
   */function
  tlid__month() {
  return moment().format("yyMM");
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
    r.txt = str.replace(r.tlid + " ", "") // try to clear out the double space
      .replace(r.tlid, "") // if ending the string, well we remove it
      .replace("@tlid ", ""); //remove the decorator

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


  var tlidValue = tlid__xtr(str);
  return str.replace(tlidValue + " ", "")
    .replace(tlidValue, "")
    .replace("@tlid ", "");


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
    },
    /** Convert input tlid to dt
     * 
     * @param {*} str 
     */
    todate: function (str) {
      return tlid__toDate(str);
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
