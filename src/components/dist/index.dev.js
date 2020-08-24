"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./vex/table/index"));

var _index2 = _interopRequireDefault(require("./Form/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function plugins(Vue) {
  Vue.component('basTable', _index["default"]);
  Vue.component('eleForm', _index2["default"]);
}

var _default = plugins;
exports["default"] = _default;