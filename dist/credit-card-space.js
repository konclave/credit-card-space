!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CreditCardSpace=t()}(this,function(){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){var t=0;return(e.selectionStart||"0"===e.selectionStart)&&(t=e.selectionStart),t}function u(e,t){e&&e.setSelectionRange&&e.setSelectionRange(t,t)}function l(e){var t,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"4 4 4 4",a=e.replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,19}/g),o=a&&a[0]||"",i=(t=o,n=r.split(" "),function e(t,n){if(0===n.length)return t.length?[t]:[];if(0===t.length)return[];var r=n.shift(),a=t.substring(0,r);return a.length<r?[a]:[a].concat(e(t.substring(r),n))}(t,n));return i.length?i.join(" "):e}var o={formatInputValue:function(e){var t=i(e),n=e.value.length,r=e.dataset.pattern||"4 4 4 4",a=l(e.value,r),o=a.length-n;e.value=a,u(e,t+o)},getCursorPosition:i,setCursorPosition:u,formatCreditCard:l,clearFormattedCardNumber:function(e){return e.replace(/ /g,"")}};function c(e){o.formatInputValue(e.target)}function s(e){var t=o.getCursorPosition(e.target);46===e.keyCode&&" "===e.target.value.charAt(t)?(t+=1,o.setCursorPosition(e.target,t)):8===e.keyCode&&" "===e.target.value.charAt(t-1)?(t-=1,o.setCursorPosition(e.target,t)):90===e.keyCode&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),e.stopPropagation())}return function(){function n(e){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),!(e instanceof Element))throw new Error("CreditCardSpace can be attached to an Element only");var t;this.element=e,(t=e).addEventListener("input",function(e){setTimeout(function(){return c(e)})}),t.addEventListener("keydown",s),e.value&&o.formatInputValue(e)}var e,t,r;return e=n,(t=[{key:"value",value:function(){return o.clearFormattedCardNumber(this.element.value)}},{key:"destroy",value:function(){this.element.removeEventListener(c),this.element.removeEventListener(s)}}])&&a(e.prototype,t),r&&a(e,r),n}()});
