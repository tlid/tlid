# Tlidug




# Usage #

## Common ##

```javascript
var tlidug = require('tlidug');
var v = tlidug.dashed();

var optiontlid="M"; //month
var separator = "--";
var v = tlidug.dashed(optiontlid,separator);

var dashed=true;
var idug = tlidug.idug(dashed);

var tlidonly = tlidug.gettlid();

```


## CLI ##
```sh
tlidug 

# chg separator
tlidug -s "--"

# add suffix
tlidug -s "--" -x "__hello"

#With dash
tlidug -d

#only tlid month
tlidug -t M

tlidug  -i -d
##b741b0d0-7e81-11ed-be2d-9f52af0f33ec


tlidug  -i 
## c5fd34a07e8111ed9009b50fecfc5678
```

