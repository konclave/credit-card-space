import utils from './utils';

class CreditCardSpace {
  constructor(element) {
    if (!(element instanceof Element)) {
      throw new Error('CreditCardSpace can be attached to an Element only');
    }
    this.element = element;
    attachEvents(element);
    if (element.value) {
      utils.formatInputValue(element);
    }
  }

  value() {
    return utils.clearFormattedCardNumber(this.element.value);
  }

  destroy() {
    this.element.removeEventListener(inputHandler);
    this.element.removeEventListener(keyDownHandler);
  }
}

function attachEvents(element) {
  element.addEventListener('input', (event) => {
    setTimeout(
      () => inputHandler(event)
    );
  });
  element.addEventListener('keydown', keyDownHandler);
}

function inputHandler(event) {
  utils.formatInputValue(event.target);
}

function keyDownHandler(event) {
  let position = utils.getCursorPosition(event.target);
  if (event.keyCode === 46 && event.target.value.charAt(position) === ' ') { // delete
    position += 1;
    utils.setCursorPosition(event.target, position);
  } else if (event.keyCode === 8 && event.target.value.charAt(position - 1) === ' ') { // backspace
    position -= 1;
    utils.setCursorPosition(event.target, position);
  } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) { // ctrl/cmd Z
    event.preventDefault();
    event.stopPropagation();
  }
}

export default CreditCardSpace;
