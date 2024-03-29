'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  var _options$element = options.element
  var element = _options$element === void 0 ? document.body : _options$element
  var oldStyle = {}
  var styleKeys = Object.keys(style) // IE browser compatible

  styleKeys.forEach(function(key) {
    oldStyle[key] = element.style[key]
  })
  styleKeys.forEach(function(key) {
    element.style[key] = style[key]
  })
  return oldStyle
}

var _default = setStyle
exports.default = _default
