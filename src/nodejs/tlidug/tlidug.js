var tlid = require("tlid");
// var idug = require("idug");

const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');


/**
 * @typedef {String} suffix
 */

/**
 * @typedef {String} tlidoption
 */

// tlid.js
// ========
module.exports = {
  get: function(tlidoption="", separator = "__",suffix="") {
    // var v = idug.undashed();
    var v = this.dashed(tlidoption,separator,suffix)
    .replace("-","")
    .replace("-","")
    .replace("-","")
    .replace("-","")
    .replace("-","")    ;
    
    return v;
  },
  gettlid: function(tlidoption="")  {
    var t =  "0";
    if (tlidoption == "h") t = tlid.hour();
    else
    if (tlidoption == "s") t = tlid.seconds();
    else
    if (tlidoption == "ms") t = tlid.miliseconds();
    else
    if (tlidoption == "m") t = tlid.minutes();
    else
    if (tlidoption == "M") t = tlid.month();
    else
    if (tlidoption == "y") t = tlid.year();
    else
    if (tlidoption == "d") t = tlid.day();
    else
    t = tlid.minutes();
    return t;
  },
  dashed: function(tlidoption="", separator = "__",suffix="") {
    var v = uuidv1();
    var t = this.gettlid(tlidoption);

    var r ="";
    if (suffix == "") 
    r=  t +separator + v;
    else 
    r = t+separator +v + separator + suffix;

    return r;
  }
};
