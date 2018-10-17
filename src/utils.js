/**
 * Formats input value with a space after 4 digits and keeps cursor on its current position after input value's been changed
 * @param {HTMLInputElement} input
 */
function formatInputValue(input) {
  const position = getCursorPosition(input);
  const srcLength = input.value.length;
  const formatted = formatCreditCard(input.value);
  const diff = formatted.length - srcLength;
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
  let position = 0;
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
 * @param {string} pattern
 * @return {string}
 */
function formatCreditCard(str, pattern = '4 4 4 4') {
  const clean = str.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = clean.match(/\d{4,19}/g);
  const match = (matches && matches[0]) || '';
  const parts = splitByPattern(match, pattern);

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

/**
 * Splits digits string to array of strings by pattern
 * @param {string} digits
 * @param {string} pattern
 * @returns {array}
 */
function splitByPattern(digits, pattern) {
  const chunks = pattern.split(' ');
  return getSlices(digits, chunks);
}

/**
 * splits digits string onto chunks length equal to pattern array elements
 * @param {string} digits
 * @param {array} pattern
 * @returns {array}
 */
function getSlices(digits, pattern) {
  if (pattern.length === 0) {
    return digits.length ? [digits] : [];
  }
  if (digits.length === 0) {
    return [];
  }
  const size = pattern.shift();
  const part = digits.substring(0, size);
  if (part.length < size) {
    return [part];
  }
  return [part].concat(getSlices(digits.substring(size), pattern));
}

export default {formatInputValue, getCursorPosition, setCursorPosition, formatCreditCard, clearFormattedCardNumber}
