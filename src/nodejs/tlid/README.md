# GOAL #


Content needs something to search for, identify in time.  

# Install #
npm install tlid --save

# Usage #
## Common ##
```javascript
var tlid = require('tlid');
var mytlid = tlid.get();
var min = tlid.minutes();
var ms = tlid.ms();
var day = tlid.day();

var mytextWithTlid = "today 181208 I had completed the feature";
if (tlid.has(mytextWithTlid)){
    var xtractedTlid = tlid.xtr(mytextWithTlid);
    console.log("ExtractedTlid: " + xtractedTlid);
};

```
## History ##

Tlid is the oldest libraries I created about 20 years ago if not more, it simply enables creating datetime based string to use mostly for efficient file naming composed of a sortable and searchable dt string.


