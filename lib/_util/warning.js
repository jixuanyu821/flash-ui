'use strict'

var _typeof = require('@babel/runtime/helpers/typeof')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
Object.defineProperty(exports, 'resetWarned', {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned
  }
})

var _warning = _interopRequireWildcard(require('../vc-util/warning'))

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop })(nodeInterop) }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

var _default = function _default(valid, component) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  (0, _warning.default)(valid, '[antdv: '.concat(component, '] ').concat(message))
}

exports.default = _default
