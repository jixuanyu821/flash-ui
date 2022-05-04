'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _tr_TR = _interopRequireDefault(require('../vc-pagination/locale/tr_TR'))

var _tr_TR2 = _interopRequireDefault(require('../date-picker/locale/tr_TR'))

var _tr_TR3 = _interopRequireDefault(require('../time-picker/locale/tr_TR'))

var _tr_TR4 = _interopRequireDefault(require('../calendar/locale/tr_TR'))

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} geçerli bir ${type} değil'
var localeValues = {
  locale: 'tr',
  Pagination: _tr_TR.default,
  DatePicker: _tr_TR2.default,
  TimePicker: _tr_TR3.default,
  Calendar: _tr_TR4.default,
  global: {
    placeholder: 'Lütfen seçiniz'
  },
  Table: {
    filterTitle: 'Filtre menüsü',
    filterConfirm: 'Tamam',
    filterReset: 'Sıfırla',
    filterEmptyText: 'Filtre yok',
    selectAll: 'Tüm sayfayı seç',
    selectInvert: 'Tersini seç',
    selectionAll: 'Tümünü seç',
    sortTitle: 'Sırala',
    expand: 'Satırı genişlet',
    collapse: 'Satırı daralt',
    triggerDesc: 'Azalan düzende sırala',
    triggerAsc: 'Artan düzende sırala',
    cancelSort: 'Sıralamayı kaldır'
  },
  Modal: {
    okText: 'Tamam',
    cancelText: 'İptal',
    justOkText: 'Tamam'
  },
  Popconfirm: {
    okText: 'Tamam',
    cancelText: 'İptal'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Arama',
    itemUnit: 'Öğe',
    itemsUnit: 'Öğeler',
    remove: 'Kaldır',
    selectCurrent: 'Tüm sayfayı seç',
    removeCurrent: 'Sayfayı kaldır',
    selectAll: 'Tümünü seç',
    removeAll: 'Tümünü kaldır',
    selectInvert: 'Tersini seç'
  },
  Upload: {
    uploading: 'Yükleniyor...',
    removeFile: 'Dosyayı kaldır',
    uploadError: 'Yükleme hatası',
    previewFile: 'Dosyayı önizle',
    downloadFile: 'Dosyayı indir'
  },
  Empty: {
    description: 'Veri Yok'
  },
  Icon: {
    icon: 'ikon'
  },
  Text: {
    edit: 'Düzenle',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    expand: 'Genişlet'
  },
  PageHeader: {
    back: 'Geri'
  },
  Form: {
    optional: '(opsiyonel)',
    defaultValidateMessages: {
      default: 'Alan doğrulama hatası ${label}',
      required: '${label} gerekli bir alan',
      enum: '${label} şunlardan biri olmalı: [${enum}]',
      whitespace: '${label} sadece boşluk olamaz',
      date: {
        format: '${label} tarih biçimi geçersiz',
        parse: '${label} bir tarihe dönüştürülemedi',
        invalid: '${label} geçersiz bir tarih'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} ${len} karakter olmalı',
        min: '${label} en az ${min} karakter olmalı',
        max: '${label} en çok ${max} karakter olmalı',
        range: '${label} ${min}-${max} karakter arası olmalı'
      },
      number: {
        len: '${label} ${len} olmalı',
        min: '${label} en az ${min} olmalı',
        max: '${label} en çok ${max} olmalı',
        range: '${label} ${min}-${max} arası olmalı'
      },
      array: {
        len: '${label} sayısı ${len} olmalı',
        min: '${label} sayısı en az ${min} olmalı',
        max: '${label} sayısı en çok ${max} olmalı',
        range: '${label} sayısı ${min}-${max} arası olmalı'
      },
      pattern: {
        mismatch: '${label} şu kalıpla eşleşmeli: ${pattern}'
      }
    }
  }
}
var _default = localeValues
exports.default = _default
