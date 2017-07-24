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
      expect(utils.clearFormattedCardNumber('1111 2222 3333 4444 555')).toBe('1111222233334444555');
    });
  });

  describe('formatCreditCard', () => {
    it('should add space after every four digits in string', () => {
      expect(utils.formatCreditCard('1111222233334444555')).toBe('1111 2222 3333 4444 555');
    });
  });

  describe('setCursorPosition', () => {
    it('should set cursor to given position in passed input', () => {
      const pos = 3;
      expect(input.selectionStart).toBe(0);
      utils.setCursorPosition(input, pos);
      expect(input.selectionStart).toBe(pos);
    });
  });

  describe('getCursorPosition', () => {
    it('should return cursor position in passed input', () => {
      const pos = 4;
      utils.setCursorPosition(input, pos);
      expect(utils.getCursorPosition(input)).toBe(pos);
    });
  });

  describe('formatInputValue', () => {
    it('should add space after every 4 digits in input value and restore cursor position', () => {
      utils.formatInputValue(input);
      expect(input.value).toBe('1111 2222 3333 4444 555');
    })
  });

  describe('formatInputValue', () => {
    it('shouldn\'t add space after first 4 digits', () => {
      input.value = '1234';
      utils.formatInputValue(input);
      expect(input.value).toBe('1234');
    })
  });
});
