var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import utils from './utils';

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

export default CreditCardSpace;