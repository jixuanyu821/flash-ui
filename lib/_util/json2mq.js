'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

/**
 * source by `json2mq`
 * https://github.com/akiran/json2mq.git
 */
var camel2hyphen = function camel2hyphen(str) {
  return str.replace(/[A-Z]/g, function(match) {
    return '-' + match.toLowerCase()
  }).toLowerCase()
}

var isDimension = function isDimension(feature) {
  var re = /[height|width]$/
  return re.test(feature)
}

var obj2mq = function obj2mq(obj) {
  var mq = ''
  var features = Object.keys(obj)
  features.forEach(function(feature, index) {
    var value = obj[feature]
    feature = camel2hyphen(feature) // Add px to dimension features

    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px'
    }

    if (value === true) {
      mq += feature
    } else if (value === false) {
      mq += 'not ' + feature
    } else {
      mq += '(' + feature + ': ' + value + ')'
    }

    if (index < features.length - 1) {
      mq += ' and '
    }
  })
  return mq
}

function _default(query) {
  var mq = ''

  if (typeof query === 'string') {
    return query
  } // Handling array of media queries

  if (query instanceof Array) {
    query.forEach(function(q, index) {
      mq += obj2mq(q)

      if (index < query.length - 1) {
        mq += ', '
      }
    })
    return mq
  } // Handling single media query

  return obj2mq(query)
}
