import CreditCardSpace from '../src/index';

describe('CreditCardSpace', () => {
  document.body.innerHTML = '<input type="text" value="4111111111111111" />';
  const input = document.querySelector('input');
  const cc = new CreditCardSpace(input);
  it('should format input initial data', () => {
    expect(input.value).toEqual('4111 1111 1111 1111');
    expect(cc.value()).toEqual('4111111111111111');
  });
});
