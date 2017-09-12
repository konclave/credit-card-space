# Credit Card Space

Formats input with a space after every 4 digits. Unlike other credit card number formatters it respects card numbers more then 16 digits.

## Usage
### As module
```js
import CreditCardSpace from 'credit-card-space';

const input = document.querySelector('#card_number');
const ccSpace = new CreditCardSpace(input);

const cardNumber = ccSpace.value();
```

### In browser
Add link into your page:
```html
<script src="node_modules/credit-card-space/dist/credit-card-space.min.js"></script>
```

You've got global CreditCardSpace constructor:
```js
var input = document.querySelector('input');
var ccInput = new CreditCardSpace(input);
```
