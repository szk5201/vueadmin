"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("@/App"));

var _index = _interopRequireDefault(require("@/store/index"));

var _index2 = _interopRequireDefault(require("@/router/index"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("./styles/index.scss");

var _httpConfig = _interopRequireDefault(require("./config/httpConfig"));

var globalFilter = _interopRequireWildcard(require("./filters/filters"));

require("@/icons");

var _vxeTable = _interopRequireDefault(require("./base/vxeTable.js"));

require("vxe-table/lib/index.css");

var _index6 = _interopRequireDefault(require("./components/index.js"));

var _xeAjax = _interopRequireDefault(require("xe-ajax"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VXETable from 'vxe-table'
for (var key in globalFilter) {
  _vue["default"].filter(key, globalFilter[key]);
}

_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vxeTable["default"]);

_vue["default"].use(_index6["default"]);

_vue["default"].prototype.$XEAjax = _xeAjax["default"];
_vue["default"].prototype.$http = _httpConfig["default"];
_vue["default"].config.productionTip = false;

_index2["default"].beforeEach(function (to, from, next) {
  if (!_index["default"].state.UserToken) {
    if (to.matched.length > 0 && !to.matched.some(function (record) {
      return record.meta.requiresAuth;
    })) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    if (!_index["default"].state.permission.permissionList) {
      _index["default"].dispatch('permission/FETCH_PERMISSION').then(function () {
        next({
          path: to.path
        });
      });
    } else {
      if (to.path !== '/login') {
        next();
      } else {
        next(from.fullPath);
      }
    }
  }
});

_index2["default"].afterEach(function (to, from, next) {
  var routerList = to.matched;

  _index["default"].commit('setCrumbList', routerList);

  _index["default"].commit('permission/SET_CURRENT_MENU', to.name);
});
/* eslint-disable no-new */


new _vue["default"]({
  el: '#app',
  router: _index2["default"],
  store: _index["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});