"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sexs = [{
  label: '男',
  value: 'M'
}, {
  label: '女',
  value: 'F'
}];
var sexProps = {
  label: 'label',
  value: 'value'
};
var disable = [{
  label: '禁用',
  value: '0'
}, {
  label: '启用',
  value: '1'
}];
var insertmanager = [{
  type: 'Input',
  label: '登录名',
  prop: 'loginName',
  width: '180px',
  placeholder: '请输入登录名...'
}, {
  type: 'Input',
  label: '姓名',
  prop: 'name',
  width: '180px',
  placeholder: '请输入姓名...'
}, {
  type: 'Select',
  label: '性别',
  prop: 'sex',
  width: '180px',
  options: sexs,
  props: sexProps,
  change: function change(row) {
    return '';
  },
  placeholder: '请选择性别...'
}, {
  type: 'Input',
  label: '用户地址',
  prop: 'userAdress',
  width: '180px',
  placeholder: '请输入用户地址...'
}, {
  type: 'Radio',
  label: '禁用/启用',
  prop: 'disableStatus',
  width: '180px',
  options: disable,
  props: sexProps
}];

var _default = _objectSpread({}, insertmanager);

exports["default"] = _default;