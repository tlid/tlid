#!/usr/bin/env node
'use strict';


var tlid = require("tlid");

var n = tlid.minutes();
var args = process.argv.slice(2);
if (args[0]) {
  if (args[0] == "h") n = tlid.hour();
  if (args[0] == "s") n = tlid.seconds();
  if (args[0] == "ms") n = tlid.miliseconds();
  if (args[0] == "m") n = tlid.month();
  if (args[0] == "M") n = tlid.month();
  if (args[0] == "y") n = tlid.year();
  if (args[0] == "d") n = tlid.day();
  if (args[0] == "--help")console.log(`
  TLID CLI
  by Guillaume D.-Isabelle, 2022

  -------------------------------------
  tlid [y|m|d|h|s|ms]
  # default is minutes
  `);
  
}
console.log(n);