import button from './button/index.js'
import cascader from './cascader/index.js'
import datePicker from './date-picker/index.js'
import form from './form/index.js'
import input from './input/index.js'
import pagination from './pagination/index.js'
import radio from './radio/index.js'
import select from './select/index.js'
import Switch from './switch/index.js'
import table from './table/index.js'
import tree from './tree/index.js'
import checkbox from './checkbox/index.js'
import menu from './menu/index.js'
import tag from './tag/index.js'
import treeSelect from './tree-select/index.js'
import dropdown from './dropdown/index.js'
import modal from './modal/index.js'
import divider from './divider/index.js'
import tabs from './tabs/index.js'
import row from './row/row.js'
import col from './col/col.js'
import inputNumber from './input-number/input-number.js'
import timePicker from './time-picker/time-picker.js'
import upload from './upload/upload.js'
import configProvider from './config-provider/config-provider.js'

const components = {
  button,
  ...radio,
  ...input,
  ...select,
  treeSelect,
  cascader,
  tag,
  ...pagination,
  ...datePicker,
  ...form,
  ...table,
  ...tree,
  ...checkbox,
  ...menu,
  Switch,
  ...dropdown,
  ...modal,
  ...divider,
  ...tabs,
  row,
  col,
  inputNumber,
  timePicker,
  upload,
  configProvider
}

const install = function(Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  button,
  cascader,
  ...datePicker,
  ...form,
  ...tree,
  ...checkbox,
  ...menu,
  ...input,
  ...pagination,
  ...radio,
  ...select,
  Switch,
  tag,
  ...table,
  treeSelect,
  ...dropdown,
  ...modal,
  ...divider,
  ...tabs,
  row,
  col,
  inputNumber,
  timePicker,
  upload,
  configProvider
}
