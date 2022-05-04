'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

// copy from https://github.com/sudodoki/toggle-selection
// refactor to esm
var deselectCurrent = function deselectCurrent() {
  var selection = document.getSelection()

  if (!selection.rangeCount) {
    return function() {}
  }

  var active = document.activeElement
  var ranges = []

  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i))
  }

  switch (active.tagName.toUpperCase() // .toUpperCase handles XHTML
  ) {
    case 'INPUT':
    case 'TEXTAREA':
      active.blur()
      break

    default:
      active = null
      break
  }

  selection.removeAllRanges()
  return function() {
    selection.type === 'Caret' && selection.removeAllRanges()

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range)
      })
    }

    active && active.focus()
  }
}

var _default = deselectCurrent
exports.default = _default
