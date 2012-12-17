/**
 * ## Not (another) Universal Unique Identifier
 *
 *   Generate a unique identifier with salt entropy if wanted. Based on time, bit shifting, and random character code matching.
 *
 *   It's fast and useful for unique identifiers.
 * 
 * ## Usage
 *
 * ```js
 * var uuid = nuu.id('entropy-salt'); // entropy-salt is an optional parameter.
 * ```
 *
 * ## Inclusion
 * 
 *   ### Node.js
 *
 *      $ npm install nuuid
 * 
 *      var nuu = require('nuuid');
 *
 *   ### Browser
 *
 *      <script src="lib/nuuid.js" type="text/javascript"></script>
 *
 * @author Nijiko Yonskai <nijikokun@gmail.com> <http://nexua.org>
 * @copyright 2012 Nijiko Yonskai
 * @license http://aol.nexua.org AOL
 * @version 2.0
 */
(function (root, name, factory) {
  if (typeof exports === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define(factory);
  else root[name] = factory();
}(this, 'nuu', function () {
  return {
    /**
     * Generates a uuid based on entropy, time and math.
     * 
     * @params {Mixed}    c   Salt value, strings distort algorithm further.
     * @return {String}
     */
    id: function(c,a,b,d,e,f,g,h,i,j,k,l) {
      l = Math.abs; d = +new Date; e = 0; f = l(d >> 32); h = l(d >> 45); i = l(d >> 8);
      g = ~~(0.5 + (Math.random() * (d >> 40))); e = Math.round(Math.exp(Math.random()*Math.log(90 - 65)) + 65);
      a = g; if(c) if(typeof c === "string") for(b = 0; b < c.length; b++) a += +(c.charCodeAt(b));
      j = ~~(0.5 + (Math.random() * (d >> 42))); a += j; a = l(a);
      k = ~~(0.5 + (Math.random() * (d >> 20)));
      return (l(h + k) + "-" + String.fromCharCode(e) + "-" + a + "-" + i).replace(/([6][5-9]|[7-8][0-9]|90)/g, function (match, one) {
        return String.fromCharCode(+one);
      });
    }
  };
}));