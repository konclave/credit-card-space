'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = { formatInputValue: formatInputValue, getCursorPosition: getCursorPosition, setCursorPosition: setCursorPosition, formatCreditCard: formatCreditCard, clearFormattedCardNumber: clearFormattedCardNumber };