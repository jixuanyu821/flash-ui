'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.reactivePick = reactivePick

var _vue = require('vue')

/**
 * Reactively pick fields from a reactive object
 *
 * @see https://vueuse.js.org/reactivePick
 */
function reactivePick(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key]
  }

  return (0, _vue.reactive)(Object.fromEntries(keys.map(function(k) {
    return [k, (0, _vue.toRef)(obj, k)]
  })))
}
