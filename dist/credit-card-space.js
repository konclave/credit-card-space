(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CreditCardSpace = factory());
}(this, (function () { 'use strict';

/**
 * Formats input value with a space after 4 digits and keeps cursor on it current position after input value's been changed
 * @param {HTMLInputElement} input
 */
function formatInputValue(input) {
  var position = getCursorPosition(input);
  var srcLength = input.value.length;
  var formatted = formatCreditCard(input.value);
  var diff = formatted.length - srcLength;
  input.value = formatted;
  setCursorPosition(input, position + diff);
}

/**
 * Returns current cursor position in text input
 *
 * @param {HTMLInputElement} input
 * @return {number}
 */
function getCursorPosition(input) {
  var position = 0;
  if (input.selectionStart || input.selectionStart === '0') {
    position = input.selectionStart;
  }
  return position;
}

/**
 * Sets cursor in text input to defined position
 *
 * @param {HTMLInputElement} element
 * @param {number} pos
 */
function setCursorPosition(input, pos) {
  if (!(input && input.setSelectionRange)) {
    return;
  }
  input.setSelectionRange(pos, pos);
}

/**
 * Formats string adding space after every for digits
 *
 * @param {string} str
 * @return {string}
 */
function formatCreditCard(str) {
  var clean = str.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  var matches = clean.match(/\d{4,19}/g);
  var match = matches && matches[0] || '';
  var parts = [];

  for (var i = 0, length = match.length; i < length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(' ');
  }
  return str;
}

/**
 * Clears spaces from formatted credit card number
 * @param {string} str
 * @return {string}
 */
function clearFormattedCardNumber(str) {
  return str.replace(/ /g, '');
}

var utils = { formatInputValue: formatInputValue, getCursorPosition: getCursorPosition, setCursorPosition: setCursorPosition, formatCreditCard: formatCreditCard, clearFormattedCardNumber: clearFormattedCardNumber };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreditCardSpace = function () {
  function CreditCardSpace(element) {
    _classCallCheck(this, CreditCardSpace);

    if (!(element instanceof Element)) {
      throw new Error('CreditCardSpace can be attached to an Element only');
    }
    this.element = element;
    attachEvents(element);
  }

  _createClass(CreditCardSpace, [{
    key: 'value',
    value: function value() {
      return utils.clearFormattedCardNumber(this.element.value);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.element.removeEventListener(inputHandler);
      this.element.removeEventListener(keyDownHandler);
    }
  }]);

  return CreditCardSpace;
}();

function attachEvents(element) {
  element.addEventListener('input', function (event) {
    setTimeout(function () {
      return inputHandler(event);
    });
  });
  element.addEventListener('keydown', keyDownHandler);
}

function inputHandler(event) {
  utils.formatInputValue(event.target);
}

function keyDownHandler(event) {
  var position = utils.getCursorPosition(event.target);
  if (event.keyCode === 46 && event.target.value.charAt(position) === ' ') {
    // delete
    position += 1;
    utils.setCursorPosition(event.target, position);
  } else if (event.keyCode === 8 && event.target.value.charAt(position - 1) === ' ') {
    // backspace
    position -= 1;
    utils.setCursorPosition(event.target, position);
  } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
    // ctrl/cmd Z
    event.preventDefault();
    event.stopPropagation();
  }
}

return CreditCardSpace;

})));
