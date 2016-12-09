class CreditCardSpace {
  constructor(element) {
    if (element instanceof Element) {
      throw('CreditCardSpace can be attached to an Element only');
    }
    this.element = element;
    attachEvents(element);
  }

  value() {
    return clearFormattedCardNumber(this.element.value);
  }

  destroy() {
    this.element.removeEventListener(inputHandler);
    this.element.removeEventListener(keyDownHandler);
  }
}

function attachEvents(element) {
  element.addEventListener('input', inputHandler);
  element.addEventListener('keydown', keyDownHandler)
}

function inputHandler(event) {
  formatInputValue(event.target);
}

function keyDownHandler(event) {
  let position = getCursorPosition(event.target);
  if (event.keyCode === 46 && event.target.value.charAt(position) === ' ') { // delete
    position += 1;
    setCursorPosition(event.target, position);
  } else if (event.keyCode === 8 && event.target.value.charAt(position - 1) === ' ') { // backspace
    position -= 1;
    setCursorPosition(event.target, position);
  } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) { // ctrl/cmd Z
    event.preventDefault();
    event.stopPropagation();
  }
}

/**
 * Formats input value with a space after 4 digits and keeps cursor on it current position after input value's been changed
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
  if (!(element && element.setSelectionRange)) {
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
  const clean = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = clean.match(/\d{4,19}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, length = match.length; i < length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(' ');
  }
  return value;
 }

/**
 * Clears spaces from formatted credit card number
 * @param {string} str
 * @return {string}
 */
function clearFormattedCardNumber(str) {
  return str.replace(/ /g, '');
}
