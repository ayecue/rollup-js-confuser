# rollup-js-confuser

A rollup plugin based on [js-confuser](https://github.com/MichaelXF/js-confuser) with the purpose to obfuscate javascript.

# Install

```bash
npm i -D rollup-js-confuser
```

# How to

```ts
import { confuse } from 'rollup-js-confuser';

return {
  ...yourOptions,
  plugins: [
    ...
    confuse()
    ...
  ]
};
```

# Options

For options take a look [here](https://github.com/MichaelXF/js-confuser#options).