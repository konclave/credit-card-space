#Credit Card Space

Formats input with a space after every 4 digits. Unlike other credit card number formatters it respects card numbers more then 16 digits. 

##Usage
```js
import CreditCardSpace from 'credit-card-space';

const input = document.querySelector('#card_number');
const ccSpace = new CreditCardSpace(input);

const cardNumber = ccSpace.value();
```
