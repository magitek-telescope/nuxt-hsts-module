# Nuxt.js HTTP Strict Transport Security module

[![codecov](https://codecov.io/gh/potato4d/nuxt-hsts-module/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/nuxt-hsts-module) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![f2653ad0d131606c49edb3f605cbf547](https://user-images.githubusercontent.com/6993514/46481007-5af6b000-c82d-11e8-99b7-4cae88c22796.gif)

Provide basic authentication to your Nuxt.js application

[https://www.npmjs.com/package/nuxt-hsts-module](https://www.npmjs.com/package/nuxt-hsts-module)

## Installation

```bash
$ yarn add nuxt-hsts-module # or npm install
```

## Usage

Edit your nuxt.config.js

```js
module.exports = {
  // ...
  modules: [
    'nuxt-hsts-module'
  ],
  hsts: process.env.NODE_ENV === 'production'
  // ...
}
```

## License

MIT

[https://github.com/potato4d/nuxt-hsts-module/blob/master/LICENSE](https://github.com/potato4d/nuxt-hsts-module/blob/master/LICENSE)
