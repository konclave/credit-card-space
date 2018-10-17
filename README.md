# Credit Card Space

Formats input with a space after every 4 digits. Unlike other credit card number formatters it respects card numbers more then 16 digits.

You can set any split pattern with `data-pattern` input attribute. '4 4 4 4' is default pattern.

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
<input data-pattern="4 2 2 2 2 4">
```

You've got global CreditCardSpace constructor:
```js
var input = document.querySelector('input');
var ccInput = new CreditCardSpace(input);
```
