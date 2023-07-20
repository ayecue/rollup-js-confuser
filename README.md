# rollup-confuser

A rollup plugin based on [js-confuser](https://github.com/MichaelXF/js-confuser) with the purpose to obfuscate javascript.

# Install

```bash
npm i -D rollup-confuser
```

# How to

```ts
import { confuse } from 'rollup-confuser';

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