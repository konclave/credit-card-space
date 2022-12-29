import utils from '../src/utils';

describe('utils', () => {
  const card = '1111222233334444555';
  let input;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = card;
    input.focus();
  });

  describe('clearFormattedCardNumber', () => {
    it('should clear all spaces from card number string', () => {
      expect(utils.clearFormattedCardNumber('1111 2222 3333 4444 555')).toEqual(card);
    });
  });

  describe('formatCreditCard', () => {
    it('should add space after every four digits in string', () => {
      expect(utils.formatCreditCard(card)).toEqual('1111 2222 3333 4444 555');
    });
    it('should add space after every digits in string according to pattern', () => {
      expect(utils.formatCreditCard(card, '4 4 3 3 3 2')).toEqual('1111 2222 333 344 445 55');
    });
    it('should leave last part not splitted if pattern is shorter then card', () => {
      expect(utils.formatCreditCard(card, '4 4')).toEqual('1111 2222 33334444555');
    });
    it('should split card event if it is shorter then pattern', () => {
      expect(utils.formatCreditCard('1111222', '4 4 4 4 2')).toEqual('1111 222');
    });
  });

  describe('setCursorPosition', () => {
    it('should set cursor to given position in passed input', () => {
      const pos = 3;
      expect(input.selectionStart).toEqual(input.value.length);
      utils.setCursorPosition(input, pos);
      expect(input.selectionStart).toEqual(pos);
    });
  });

  describe('getCursorPosition', () => {
    it('should return cursor position in passed input', () => {
      const pos = 4;
      utils.setCursorPosition(input, pos);
      expect(utils.getCursorPosition(input)).toEqual(pos);
    });
  });

  describe('formatInputValue', () => {
    it('should add space after every 4 digits in input value and restore cursor position', () => {
      utils.formatInputValue(input);
      expect(input.value).toEqual('1111 2222 3333 4444 555');
    })
  });

  describe('formatInputValue', () => {
    it('shouldn\'t add space after first 4 digits', () => {
      input.value = '1234';
      utils.formatInputValue(input);
      expect(input.value).toEqual('1234');
    })
  });
});
