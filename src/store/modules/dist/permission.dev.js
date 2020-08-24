"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _permission = require("@/api/permission");

var _index = _interopRequireWildcard(require("@/router/index"));

var _recursionRouter = require("@/utils/recursion-router");

var _dynamicRouter = _interopRequireDefault(require("@/router/dynamic-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  namespaced: true,
  state: {
    permissionList: null
    /** 所有路由 */
    ,
    sidebarMenu: []
    /** 导航菜单 */
    ,
    currentMenu: ''
    /** 当前active导航菜单 */
    ,
    control_list: []
    /** 完整的权限列表 */
    ,
    avatar: ''
    /** 头像 */
    ,
    account: ''
    /** 用户角色 */

  },
  getters: {},
  mutations: {
    SET_AVATAR: function SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_ACCOUNT: function SET_ACCOUNT(state, account) {
      state.account = account;
    },
    SET_PERMISSION: function SET_PERMISSION(state, routes) {
      state.permissionList = routes;
    },
    CLEAR_PERMISSION: function CLEAR_PERMISSION(state) {
      state.permissionList = null;
    },
    SET_MENU: function SET_MENU(state, menu) {
      state.sidebarMenu = menu;
    },
    CLEAR_MENU: function CLEAR_MENU(state) {
      state.sidebarMenu = [];
    },
    SET_CURRENT_MENU: function SET_CURRENT_MENU(state, currentMenu) {
      state.currentMenu = currentMenu;
    },
    SET_CONTROL_LIST: function SET_CONTROL_LIST(state, list) {
      state.control_list = list;
    }
  },
  actions: {
    FETCH_PERMISSION: function FETCH_PERMISSION(_ref) {
      var commit, state, permissionList, routes, MainContainer, children, initialRoutes;
      return regeneratorRuntime.async(function FETCH_PERMISSION$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, state = _ref.state;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _permission.fetchPermission)());

            case 3:
              permissionList = _context.sent;
              commit('SET_AVATAR', permissionList.avatar);
              commit('SET_ACCOUNT', permissionList.name);
              permissionList.data.push('yuekeju-role-manage');
              permissionList.data.push('menu_manage');
              permissionList.data.push('managerSysUser');
              routes = (0, _recursionRouter.recursionRouter)(permissionList.data, _dynamicRouter["default"]);
              MainContainer = _index.DynamicRoutes.find(function (v) {
                return v.path === '';
              });
              children = MainContainer.children;
              commit('SET_CONTROL_LIST', [].concat(_toConsumableArray(children), _toConsumableArray(_dynamicRouter["default"])));
              children.push.apply(children, _toConsumableArray(routes));
              commit('SET_MENU', children);
              initialRoutes = _index["default"].options.routes;

              _index["default"].addRoutes(_index.DynamicRoutes);

              commit('SET_PERMISSION', [].concat(_toConsumableArray(initialRoutes), _toConsumableArray(_index.DynamicRoutes)));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;