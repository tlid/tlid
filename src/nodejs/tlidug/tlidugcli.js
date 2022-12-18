#!/usr/bin/env node
'use strict';


// var tlid = require("tlid");
// var tlidug = require("tlidug");
// var idug = require("idug");
var tlid = require("tlid");
// var idug = require("idug");
var p = require("./tlidug");

var o = "";
var separator = "__";
var args = process.argv.slice(2);
if (args[0]) {
  if (args[0] != "-t") 
       o = args[0];
       else if (args[1])o = args[1];

  // if (args[0] == "h") n = tlid.hour();
  // if (args[0] == "s") n = tlid.seconds();
  // if (args[0] == "ms") n = tlid.miliseconds();
  // if (args[0] == "m") n = tlid.month();
  // if (args[0] == "M") n = tlid.month();
  // if (args[0] == "y") n = tlid.year();
  // if (args[0] == "d") n = tlid.day();
  if (args[0] == "--help")console.log(`
  TLIDUG CLI
  by Guillaume D.-Isabelle, 2022
  
  -------------------------------------
  tlid [y|m|d|h|s|ms]
  # default is minutes
  `);
  
}


if (args[0] == "-s") separator = args[1];
 
if (args[1] == "-s") separator = args[2];
 
if (args[2] == "-s") separator = args[3];
if (args[3] == "-s") separator = args[4];

var r = "";
var u = "u";
var x = "";
var only_tlid=false;
if (args[0]){
  if (args[0] == "-x") x = args[1];
  if (args[0] == "-t") only_tlid=true;
}
if (args[1]) {
  if (args[1] == "-x") x = args[2];
  if (args[1] == "-t") only_tlid=true;
}
if (args[2]) {
  if (args[2] == "-x") x = args[3];
  if (args[2] == "-t") only_tlid=true;
}
if (args[3]) {
  if (args[3] == "-x") x = args[4];
  if (args[3] == "-t") only_tlid=true;
}
if (args[4]) {
  if (args[4] == "-x") x = args[5];
  if (args[4] == "-t") only_tlid=true;
}

if (only_tlid) 
{
console.log(p.gettlid(o));
return;
}
  
if (args[0]) 
  if (args[0] == "-d") r = p.dashed(o,separator,x)
if (args[1]) 
  if (args[1] == "-d")   r = p.dashed(o,separator,x)
if (args[2]) 
  if (args[2] == "-d")   r = p.dashed(o,separator,x)
if (args[3]) 
  if (args[3] == "-d")   r = p.dashed(o,separator,x)


if (r=="") {
  r=p.get(o,separator,x);
}


console.log(r);