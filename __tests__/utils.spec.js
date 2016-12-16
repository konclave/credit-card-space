import utils from '../src/utils';

describe('clearFormattedCardNumber', () => {
  it('should clear all spaces from card number string', () => {
    expect(utils.clearFormattedCardNumber('1111 2222 3333 4444 555')).toBe('1111222233334444555');
  })
})
