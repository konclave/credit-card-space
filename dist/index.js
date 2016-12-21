'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _utils2.default.clearFormattedCardNumber(this.element.value);
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
  element.addEventListener('input', inputHandler);
  element.addEventListener('keydown', keyDownHandler);
}

function inputHandler(event) {
  _utils2.default.formatInputValue(event.target);
}

function keyDownHandler(event) {
  var position = _utils2.default.getCursorPosition(event.target);
  if (event.keyCode === 46 && event.target.value.charAt(position) === ' ') {
    // delete
    position += 1;
    _utils2.default.setCursorPosition(event.target, position);
  } else if (event.keyCode === 8 && event.target.value.charAt(position - 1) === ' ') {
    // backspace
    position -= 1;
    _utils2.default.setCursorPosition(event.target, position);
  } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
    // ctrl/cmd Z
    event.preventDefault();
    event.stopPropagation();
  }
}

exports.default = CreditCardSpace;