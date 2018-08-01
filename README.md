# html-webpack-bom-plugin

> Add utf8 BOM for the html file.
>
> [![NPM Version][npm-image]][npm-url]
> [![Download Status][download-image]][npm-url]
> ![Node Version][node-image]
> [![Dependencies][david-image]][david-url]

# Usage

```js
const HTMLWebpackBOMPlugin = require('html-webpack-bom-plugin');

module.exports = {
  // ... webpack configure
  plugins: [
    // ... webpack plugins
    new HTMLWebpackBOMPlugin()
  ]
};
```

# License

[MIT](LICENSE)

[david-image]: http://img.shields.io/david/nuintun/html-webpack-bom-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/nuintun/html-webpack-bom-plugin
[node-image]: http://img.shields.io/node/v/html-webpack-bom-plugin.svg?style=flat-square
[npm-image]: http://img.shields.io/npm/v/html-webpack-bom-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/html-webpack-bom-plugin
[download-image]: http://img.shields.io/npm/dm/html-webpack-bom-plugin.svg?style=flat-square
