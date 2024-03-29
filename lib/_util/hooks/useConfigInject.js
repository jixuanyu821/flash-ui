'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vue = require('vue')

var _configProvider = require('../../config-provider')

var _default = function _default(name, props) {
  var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider)
  var prefixCls = (0, _vue.computed)(function() {
    return configProvider.getPrefixCls(name, props.prefixCls)
  })
  var direction = (0, _vue.computed)(function() {
    var _a

    return (_a = props.direction) !== null && _a !== void 0 ? _a : configProvider.direction
  })
  var rootPrefixCls = (0, _vue.computed)(function() {
    return configProvider.getPrefixCls()
  })
  var autoInsertSpaceInButton = (0, _vue.computed)(function() {
    return configProvider.autoInsertSpaceInButton
  })
  var renderEmpty = (0, _vue.computed)(function() {
    return configProvider.renderEmpty
  })
  var space = (0, _vue.computed)(function() {
    return configProvider.space
  })
  var pageHeader = (0, _vue.computed)(function() {
    return configProvider.pageHeader
  })
  var form = (0, _vue.computed)(function() {
    return configProvider.form
  })
  var getTargetContainer = (0, _vue.computed)(function() {
    return props.getTargetContainer || configProvider.getTargetContainer
  })
  var getPopupContainer = (0, _vue.computed)(function() {
    return props.getPopupContainer || configProvider.getPopupContainer
  })
  var virtual = (0, _vue.computed)(function() {
    var _a

    return (_a = props.virtual) !== null && _a !== void 0 ? _a : configProvider.virtual
  })
  var dropdownMatchSelectWidth = (0, _vue.computed)(function() {
    var _a

    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : configProvider.dropdownMatchSelectWidth
  })
  var size = (0, _vue.computed)(function() {
    return props.size || configProvider.componentSize
  })
  var autocomplete = (0, _vue.computed)(function() {
    var _a

    return props.autocomplete || ((_a = configProvider.input) === null || _a === void 0 ? void 0 : _a.autocomplete)
  })
  return {
    configProvider: configProvider,
    prefixCls: prefixCls,
    direction: direction,
    size: size,
    getTargetContainer: getTargetContainer,
    getPopupContainer: getPopupContainer,
    space: space,
    pageHeader: pageHeader,
    form: form,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    renderEmpty: renderEmpty,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    rootPrefixCls: rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete: autocomplete
  }
}

exports.default = _default
