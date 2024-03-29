'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame
exports.default = getRequestAnimationFrame
var availablePrefixs = ['moz', 'ms', 'webkit']

function requestAnimationFramePolyfill() {
  var lastTime = 0
  return function(callback) {
    var currTime = new Date().getTime()
    var timeToCall = Math.max(0, 16 - (currTime - lastTime))
    var id = window.setTimeout(function() {
      callback(currTime + timeToCall)
    }, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function() {}
  }

  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window)
  }

  var prefix = availablePrefixs.filter(function(key) {
    return ''.concat(key, 'RequestAnimationFrame') in window
  })[0]
  return prefix ? window[''.concat(prefix, 'RequestAnimationFrame')] : requestAnimationFramePolyfill()
}

function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null
  }

  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id)
  }

  var prefix = availablePrefixs.filter(function(key) {
    return ''.concat(key, 'CancelAnimationFrame') in window || ''.concat(key, 'CancelRequestAnimationFrame') in window
  })[0]
  return prefix ? (window[''.concat(prefix, 'CancelAnimationFrame')] || window[''.concat(prefix, 'CancelRequestAnimationFrame')]).call(this, id) : clearTimeout(id)
}
