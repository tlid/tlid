var tlidlib = require("tlid");
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
    .replace("-","");    
    return v;
  },
  idug: function(dashed=true) {
    var v = uuidv1();
    if (dashed) 
      return v;
    else return v 
              .replace("-","")
              .replace("-","")
              .replace("-","")
              .replace("-","")
              .replace("-","");    
  },
  tlid: function(tlidoption="")  {
    var t =  "0";
    if (tlidoption == "h") t = tlidlib.hour();
    else
    if (tlidoption == "s") t = tlidlib.seconds();
    else
    if (tlidoption == "ms") t = tlidlib.miliseconds();
    else
    if (tlidoption == "m") t = tlidlib.minutes();
    else
    if (tlidoption == "M") t = tlidlib.month();
    else
    if (tlidoption == "y") t = tlidlib.year();
    else
    if (tlidoption == "d") t = tlidlib.day();
    else
    t = tlidlib.minutes();
    return t;
  },
  dashed: function(tlidoption="", separator = "__",suffix="") {
    var v = uuidv1();
    var t = this.tlid(tlidoption);

    var r ="";
    if (suffix == "") 
    r=  t +separator + v;
    else 
    r = t+separator +v + separator + suffix;

    return r;
  }
};
