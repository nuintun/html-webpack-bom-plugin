/**
 * @module index
 * @listens MIT
 * @author nuintun
 * @description Add utf8 BOM for the html file.
 */

'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

// BOM
const BOM = Buffer.from([0xef, 0xbb, 0xbf]);

/**
 * @function unixify
 * @description Convert path separators to posix/unix-style forward slashes.
 * @param {string} path
 * @returns {string}
 */
function unixify(path) {
  return path.replace(/\\/g, '/');
}

/**
 * @class HTMLWebpackBOMPlugin
 */
class HTMLWebpackBOMPlugin {
  /**
   * @property {string} name
   */
  name = 'HTMLWebpackBOMPlugin';

  /**
   * @method addBOM
   * @param {Compilation} compilation
   * @param {string} outputName
   * @param {function} next
   */
  addBOM(compilation, outputName, next) {
    const file = compilation.assets[outputName];
    const html = Buffer.concat([BOM, Buffer.from(file.source())]);

    // Delete origin assets
    delete compilation.assets[outputName];

    // Rewrite assets
    compilation.assets[unixify(outputName)] = {
      source: () => html,
      size: () => Buffer.byteLength(html)
    };

    // Call next
    next();
  }

  /**
   * @method apply
   * @param {Compiler} compiler
   */
  apply(compiler) {
    // Get name
    const name = this.name;

    // Hook into the html-webpack-plugin after emit
    compiler.hooks.compilation.tap(name, compilation => {
      HtmlWebpackPlugin.getHooks(compilation).afterEmit.tapAsync(name, ({ outputName }, next) => {
        this.addBOM(compilation, outputName, next);
      });
    });
  }
}

// Exports
module.exports = HTMLWebpackBOMPlugin;
