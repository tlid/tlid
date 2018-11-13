var tlid = require("tlid");
var idug = require("idug");

// tlid.js
// ========
module.exports = {
  get: function() {
    var v = idug.undashed();
    return tlid.ms() + "__" + v;
  },
  char: function() {
    var v = idug.undashed();
    return tlid.ms() + v;
  },
  dashed: function() {
    var v = idug.get();
    return tlid.ms() + "-" + v;
  }
};
