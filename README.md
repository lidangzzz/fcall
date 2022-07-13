# fcall

`fcall`, fetch and call any remote hot functions, anywhere, anytime, without installations or configurations.

## Installation

If you are using **Node.js**, install it with **npm**

```bash
npm install fcall
```

or **yarn**

```bash
yarn add fcall
```

## Example

If you are using **Node.js**, you can call any function in the world in the following way:

```js
// Import the `fcall` module
import { f } from 'fcall';

// Call any remote function in the world
const result = f('your_function', [param1, param2, param3]);
```

## How does `fcall` work?

1. `fcall` sends a request to the server to fetch the function by its name `'your_function'`;
2. The server then returns the source code of function `'your_function'`;
3. The function source code is executed with the parameter list `[param1, param2, param3]`;
4. The result is returned after calling the function `f('your_function', [param1, param2, param3])`.
