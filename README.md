# `fcall`

`fcall()`, fetch and call any remote hot function.

1. Install `fcall()` once, run any functions/modules/libraries
2. Hot load any functions from Hedgehog Lab anywhere in your code.

## How to use `fcall()`?

If you are using Node.js, install it with 

```bash
npm install fcall
```

and use it like this:

```js
// Import the `fcall` module
import { fcall } from 'fcall';

// Call any remote function you want
const fc = fcall();
const result = fc.f (
  'your_function_name',     // your function name
  [param1, param2, param3]  // your function parameter list
);
```

## How does `fcall()` work?

1. `fcall()` sends a request to the server to fetch the function by its name `'your_function_name'`;
2. The server then returns the function `'your_function_name'` source code;
3. The function source code is executed with the parameters;
4. The result is returned after calling the function `fcall()`.