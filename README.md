## Not (another) Universal Unique Identifier

  Generate a unique identifier with salt entropy if wanted. Based on time, bit shifting, and random character code matching.

  It's fast and useful for unique identifiers.

## Usage

```js
var uuid = nuu.id('entropy-salt'); // entropy-salt is an optional parameter.
```

## Inclusion

  ### Node.js

     $ npm install nuuid

     var nuu = require('nuuid');

  ### Browser

     <script src="lib/nuuid.js" type="text/javascript"></script>